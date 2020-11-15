const winston = require('winston');
const { isProduction } = require('../config');
require('winston-daily-rotate-file');

var hourlyRotateFileTransport = new winston.transports.DailyRotateFile({
    filename: 'log-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '3d',
    dirname: 'logs'
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
  ),
  transports: [
    hourlyRotateFileTransport,
    new winston.transports.Console()
  ],
  level: isProduction ? 'info' : 'debug'
});

module.exports = { logger }
