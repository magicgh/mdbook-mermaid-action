export function getURL(os: string, version: string): string {
  const ext = (os: string) => {
    if (os === 'pc-windows-msvc') {
      return 'zip';
    } else {
      return 'tar.gz';
    }
  };

  const crateName: string = `mdbook-mermaid-v${version}-x86_64-${os}`;
  const baseURL: string =
    'https://github.com/badboy/mdbook-mermaid/releases/download';
  const url: string = `${baseURL}/v${version}/${crateName}.${ext(os)}`;

  return url;
}
