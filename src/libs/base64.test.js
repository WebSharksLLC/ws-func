const {base64Helper} = require('./');
const fs = require("fs");

test('isBase64String', () => {
    expect(base64Helper.isBase64String(null)).toBeFalsy();
    expect(base64Helper.isBase64String('')).toBeFalsy();
    expect(base64Helper.isBase64String(undefined)).toBeFalsy();
    expect(base64Helper.isBase64String(' ')).toBeFalsy();
    expect(base64Helper.isBase64String(' sd sadf')).toBeFalsy();
    expect(base64Helper.isBase64String('data:image/png;base64,')).toBeFalsy();
    expect(base64Helper.isBase64String('data:image/png;base64, sd sadf')).toBeFalsy();
    expect(base64Helper.isBase64String('dfasdfr342')).toBeFalsy();
    expect(base64Helper.isBase64String('afQ$%rfew')).toBeFalsy();
    expect(base64Helper.isBase64String('1342234')).toBeFalsy();
    expect(base64Helper.isBase64String(1342234)).toBeFalsy();
    expect(base64Helper.isBase64String('data:image/png;base64,uuLMhh==')).toBeFalsy();
    expect(base64Helper.isBase64String('/ere/erer/r.jpg')).toBeFalsy();

    expect(base64Helper.isBase64String('dGVzdCBzdHJpbmc=')).toBeTruthy();
    expect(base64Helper.isBase64String(
        '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    )).toBeTruthy();
})

test('isBase64File', () => {
    expect(base64Helper.isBase64File(null)).toBeFalsy();
    expect(base64Helper.isBase64File('')).toBeFalsy();
    expect(base64Helper.isBase64File(undefined)).toBeFalsy();
    expect(base64Helper.isBase64File(' ')).toBeFalsy();
    expect(base64Helper.isBase64File(' sd sadf')).toBeFalsy();
    expect(base64Helper.isBase64File('dfasdfr342')).toBeFalsy();
    expect(base64Helper.isBase64File('afQ$%rfew')).toBeFalsy();
    expect(base64Helper.isBase64File('1342234')).toBeFalsy();
    expect(base64Helper.isBase64File(1342234)).toBeFalsy();
    expect(base64Helper.isBase64File(
        '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    )).toBeFalsy();

    expect(base64Helper.isBase64File('data:image/png;base64,uuLMhh==')).toBeTruthy();
    expect(base64Helper.isBase64File('data:image/png;base64,dGVzdCBzdHJpbmc=')).toBeTruthy();
    expect(base64Helper.isBase64File(
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    )).toBeTruthy();

})

test('stringToBase64File', () => {
    expect(() => base64Helper.stringToBase64File(null)).toThrow(TypeError)
    expect(base64Helper.stringToBase64File('uuLMhh==', 'image/png')).toEqual('data:image/png;base64,uuLMhh==');
    expect(base64Helper.stringToBase64File('test string', 'image/png')).toEqual('data:image/png;base64,dGVzdCBzdHJpbmc=');

})

test('stringToBase64', () => {
    expect(() => base64Helper.stringToBase64(null)).toThrow(TypeError)
    expect(base64Helper.stringToBase64('test string')).toEqual('dGVzdCBzdHJpbmc=');

})

test('base64ToString', () => {
    expect(() => base64Helper.base64ToString(null)).toThrow(TypeError)
    expect(() => base64Helper.base64ToString('test string')).toThrow(TypeError)
    expect(() => base64Helper.base64ToString('data:image/png;base64,uuLMhh==')).toThrow(TypeError)
    expect(base64Helper.base64ToString('dGVzdCBzdHJpbmc=')).toEqual('test string')

})

test('base64ToBuffer', () => {
    expect(() => base64Helper.base64ToBuffer(null)).toThrow(TypeError)
    expect(() => base64Helper.base64ToBuffer('test string')).toThrow(TypeError)
    expect(() => base64Helper.base64ToBuffer('dGVzdCBzdHJpbmc=')).toThrow(TypeError)
    expect(typeof base64Helper.base64ToBuffer('data:image/png;base64,uuLMhh==')).toEqual('object')

})

test('saveBase64ToFileSync', () => {
    const imageBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    const imagePath = __dirname + '/../test/files/test.jpg'
    expect(() => base64Helper.saveBase64ToFileSync(null, 'test.jpg')).toThrow(TypeError)
    if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
    }
    let filePath = base64Helper.saveBase64ToFileSync(imageBase64, imagePath)
    expect(filePath).toEqual(imagePath)

})

test('saveBase64ToFile', async () => {
    const imageBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    const imagePath = __dirname + '/../test/files/test1.jpg'
    if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
    }
    let filePath = await base64Helper.saveBase64ToFile(imageBase64, imagePath)
    expect(filePath).toEqual(imagePath)

})

test('loadFileAsBase64', async () => {
    const imageBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    const imagePath = __dirname + '/../test/files/test1.jpg'
    let base64String = await base64Helper.loadFileAsBase64(imagePath)
    expect(base64String).toEqual(imageBase64)

})

test('loadFileAsBase64Sync', () => {
    const imageBase64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEACAhITMkM1EwMFFCLy8vQiccHBwcJyIXFxcXFyIRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBIjMzNCY0IhgYIhQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYABgMBIgACEQEDEQH/xABVAAEBAAAAAAAAAAAAAAAAAAAAAxAAAQQCAwEAAAAAAAAAAAAAAgABAxQEIxIkMxMBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AIE7MwkbOUJDJWx+ZjXATitx2/h2bEWvX5Y0npQ7aIiD/9k='
    const imagePath = __dirname + '/../test/files/test1.jpg'
    let base64String = base64Helper.loadFileAsBase64Sync(imagePath)
    expect(base64String).toEqual(imageBase64)

})
