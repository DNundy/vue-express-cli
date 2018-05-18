const db = {
    config: {
        host: '127.0.0.1',          // MySQL所在服务器IP
        user: 'root',               // 用户名
        password: '',               // 密码
        database: 'fem',            // 数据库名称
        port: 80,                   // 端口号
        dateStrings: true,          // 时间以字符串形式显示，否则会有类似这样的显示：Thu Apr 14 2016 00:00:00 GMT+0800 (中国标准时间) 17:20:12
    }
};
module.exports = db;