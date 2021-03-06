import {getURL} from '../src/get-url';

describe('getURL()', () => {
  test('return extected URL', () => {
    const testVersion: string = '0.8.2';
    const baseURL: string = `https://github.com/badboy/mdbook-mermaid/releases/download/v${testVersion}/mdbook-mermaid-v${testVersion}-x86_64`;
    const urlLinux: string = `${baseURL}-unknown-linux-gnu.tar.gz`;
    const urlMacOS: string = `${baseURL}-apple-darwin.tar.gz`;
    const urlWindows: string = `${baseURL}-pc-windows-msvc.zip`;
    expect(getURL('unknown-linux-gnu', '0.8.2')).toBe(urlLinux);
    expect(getURL('unknown-linux-gnu', '1.8.2')).not.toBe(urlLinux);
    expect(getURL('my-os', '0.8.2')).not.toBe(urlLinux);
    expect(getURL('apple-darwin', '0.8.2')).toBe(urlMacOS);
    expect(getURL('pc-windows-msvc', '0.8.2')).toBe(urlWindows);
  });
});
