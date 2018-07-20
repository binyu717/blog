## 推荐
[存储与持久化操作配置详细解析](https://yq.aliyun.com/articles/29122)
Quartz 的 Misfire处理规则:

 调度(scheduleJob)或恢复调度(resumeTrigger,resumeJob)后不同的misfire对应的处理规则


CronTrigger

withMisfireHandlingInstructionDoNothing
——不触发立即执行
——等待下次Cron触发频率到达时刻开始按照Cron频率依次执行

withMisfireHandlingInstructionIgnoreMisfires
——以错过的第一个频率时间立刻开始执行
——重做错过的所有频率周期后
——当下一次触发频率发生时间大于当前时间后，再按照正常的Cron频率依次执行

withMisfireHandlingInstructionFireAndProceed
——以当前时间为触发频率立刻触发一次执行
——然后按照Cron频率依次执行


SimpleTrigger

withMisfireHandlingInstructionFireNow
——以当前时间为触发频率立即触发执行
——执行至FinalTIme的剩余周期次数
——以调度或恢复调度的时刻为基准的周期频率，FinalTime根据剩余次数和当前时间计算得到
——调整后的FinalTime会略大于根据starttime计算的到的FinalTime值

withMisfireHandlingInstructionIgnoreMisfires
——以错过的第一个频率时间立刻开始执行
——重做错过的所有频率周期
——当下一次触发频率发生时间大于当前时间以后，按照Interval的依次执行剩下的频率
——共执行RepeatCount+1次

withMisfireHandlingInstructionNextWithExistingCount
——不触发立即执行
——等待下次触发频率周期时刻，执行至FinalTime的剩余周期次数
——以startTime为基准计算周期频率，并得到FinalTime
——即使中间出现pause，resume以后保持FinalTime时间不变


withMisfireHandlingInstructionNowWithExistingCount
——以当前时间为触发频率立即触发执行
——执行至FinalTIme的剩余周期次数
——以调度或恢复调度的时刻为基准的周期频率，FinalTime根据剩余次数和当前时间计算得到
——调整后的FinalTime会略大于根据starttime计算的到的FinalTime值

withMisfireHandlingInstructionNextWithRemainingCount
——不触发立即执行
——等待下次触发频率周期时刻，执行至FinalTime的剩余周期次数
——以startTime为基准计算周期频率，并得到FinalTime
——即使中间出现pause，resume以后保持FinalTime时间不变

withMisfireHandlingInstructionNowWithRemainingCount
——以当前时间为触发频率立即触发执行
——执行至FinalTIme的剩余周期次数
——以调度或恢复调度的时刻为基准的周期频率，FinalTime根据剩余次数和当前时间计算得到
——调整后的FinalTime会略大于根据starttime计算的到的FinalTime值

MISFIRE_INSTRUCTION_RESCHEDULE_NOW_WITH_REMAINING_REPEAT_COUNT
——此指令导致trigger忘记原始设置的starttime和repeat-count
——触发器的repeat-count将被设置为剩余的次数
——这样会导致后面无法获得原始设定的starttime和repeat-count值