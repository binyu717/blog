## 使用Spring Validation 完成后端数据校验

## 使用方法
## 校验模式
## 参数校验
- 字段校验
- 对象校验
- 对象级联校验
- 分组校验
## 自定义验证器

## 一、使用方法
### 引入依赖
```xml
        <dependency>
            <groupId>javax.validation</groupId>
            <artifactId>validation-api</artifactId>
            <version>1.1.0.Final</version>
        </dependency>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-validator</artifactId>
            <version>5.4.1.Final</version>
        </dependency>
```
- spring-boot-starter-web已包含上述两个依赖，即若是springBoot应，只需要引入spring-boot-starter-web依赖即可。

## 校验模式
### 1、普通模式（默认是这个模式）
    普通模式(会校验完所有的属性，然后返回所有的验证失败信息)
### 2、快速失败返回模式    
    快速失败返回模式(只要有一个验证失败，则返回)
### 自定义配置文件
```java
 public static <T> void validation(T t, Class<?>... groups) {
        ValidatorFactory validatorFactory = Validation.byProvider(HibernateValidator.class)
                .configure()
//                .failFast(true) //快速失败返回
                .failFast(false) //普通模式
                .buildValidatorFactory();
        Validator validator = validatorFactory.getValidator();
        Set<ConstraintViolation<Object>> violations = validator.validate(t, groups);
        if (CollectionUtils.isNotEmpty(violations)) {
            throw new ConstraintViolationException(violations);
        }
    }
```
## 统一异常处理
```java

```
## 参数校验
- 字段校验：可以直接修饰在字段上
- 对象校验： @Validated修饰在对象上，可以指定分组
- 对象级联校验：对象里的对象用@valid修饰，则可以校验下一层对象的属性
- 分组校验：新建group类，根据需要是否继承Default类。
```java
@RestController()
@RequestMapping("user")
@Api(value = "用户")
public class UserController {

    @Autowired
    private UserConvertor userConvertor;

    @RequestMapping(value = "", method = RequestMethod.POST)
    @ApiOperation(value = "新建用户信息")
    public ResponseMsg addUser(@RequestBody @Validated(CreateGroup.class) UserParam userParam) {
        UserVO userVO = userConvertor.paramToVO(userParam);
        return ResponseMsg.buildSuccess("新增成功",userVO);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    @ApiOperation(value = "修改用户信息")
    public ResponseMsg modifyUser(@RequestBody @Validated(UpdateGroup.class) UserParam userParam) {
        UserVO userVO = userConvertor.paramToVO(userParam);
        return ResponseMsg.buildSuccess("修改成功",userVO);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ApiOperation(value = "删除用户")
    public ResponseMsg deleteUser(@PathVariable("id") @NotNull(message = "VALIDATION-USER-0003") Long id) {
        return ResponseMsg.buildSuccess("删除成功", id);
    }
}
```
```java
@Data
public class UserParam {

    @NotBlank(message = "VALIDATION-USER-0003",groups = {UpdateGroup.class})
    private Long id;

    @NotBlank(message = "VALIDATION-USER-0000",groups = {CreateGroup.class, UpdateGroup.class})
    private String name;

    @Pattern(regexp="^[0-9]{1,2}$",message = "VALIDATION-USER-0001",groups = {CreateGroup.class, UpdateGroup.class})
    private int sex;

    @NotNull(message = "VALIDATION-USER-0002",groups = {CreateGroup.class, UpdateGroup.class})
    private Integer age;

    private int education;

    private String school;

    @Valid
    private AddressParam address;
}
```
```java
@Data
public class AddressParam {

    @NotBlank(message = "VALIDATION-USER-0004",groups = {CreateGroup.class, UpdateGroup.class})
    private String province;

    private String city;

    private String area;

    private String detail;

}
```

## 自定义验证器
### 1.定义注解类
```java
@Constraint(validatedBy = {IntegerRangeValidator.class})
@Target({FIELD, ANNOTATION_TYPE, PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface IntegerRange {

    String message() default "";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int[] range() default {};
}
```
### 2.定义校验类
```java
public class IntegerRangeValidator implements ConstraintValidator<IntegerRange, Integer> {

    private int[] range;

    @Override
    public boolean isValid(Integer value, ConstraintValidatorContext context) {
        for (Integer i : range) {
            if (i.equals(value)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void initialize(IntegerRange constraintAnnotation) {
        range = constraintAnnotation.range();
    }
}
```
## Validation相关注解含义
- @Null 限制只能为null
- @NotNull 限制必须不为null
- @AssertFalse 限制必须为false
- @AssertTrue 限制必须为true
- @DecimalMax(value) 限制必须为一个不大于指定值的数字
- @DecimalMin(value) 限制必须为一个不小于指定值的数字
- @Digits(integer,fraction) 限制必须为一个小数，且整数部分的位数不能超过integer，小数部分的位数不能超过fraction
- @Future 限制必须是一个将来的日期
- @Max(value) 限制必须为一个不大于指定值的数字
- @Min(value) 限制必须为一个不小于指定值的数字
- @Past 限制必须是一个过去的日期
- @Pattern(value) 限制必须符合指定的正则表达式
- @Size(max,min) 限制字符长度必须在min到max之间
- @Past 验证注解的元素值（日期类型）比当前时间早
- @NotEmpty 验证注解的元素值不为null且不为空（字符串长度不为0、集合大小不为0）
- @NotBlank 验证注解的元素值不为空（不为null、去除首位空格后长度为0），不同于@NotEmpty，@NotBlank只应用于字符串且在比较时会去除字符串的空格
- @Email 验证注解的元素值是Email，也可以通过正则表达式和flag指定自定义的email格式