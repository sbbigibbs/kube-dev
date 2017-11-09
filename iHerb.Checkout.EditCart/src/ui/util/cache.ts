const getUtcTime = () => new Date().getTime() /1000|0
const addDays = (val, time) => addHours(val * 24, time)
const addHours = (val, time) => addMinutes(val * 60, time)
const addMinutes = (val, time) => addSeconds(val * 60, time)
const addSeconds = (val, time) => time + val

export const expiration = (days = 0, hours = 0, minutes = 0, seconds = 0) => 
    addSeconds(seconds, 
        addMinutes(minutes, 
            addHours(hours, 
                addDays(days, 
                    getUtcTime()))))

export interface ICache {
    get: (key: any) => any
    set: (key: any, val: any) => any
}

export default (dao: ICache) => {
    return { 
        get: (key) => {
            if (dao.get(key)) {
                dao.get(key).expir > getUtcTime();
                return dao.get(key).val
            }
        },

        set: (key, val, expir) => {
            dao.set(key, {
                val,
                expir
            })
        }
    }
}