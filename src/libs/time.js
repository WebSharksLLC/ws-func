module.exports = {
    timestamp: (diff) => {
        try{
            diff = parseInt(diff)
        }catch (e) {
            diff = false
        }
        return diff ? (Math.floor(new Date().getTime() / 1000) + diff) : Math.floor(new Date().getTime() / 1000)
    }
}