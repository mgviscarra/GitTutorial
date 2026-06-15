//Some code here
export class Path {
    private path: string;
    private static instance: Path;

    constructor(path: string) {
        this.path = path;
    }

    public getPath(): string {
        return this.path;
    }

    public setPath(path: string): void {
        this.path = path;
    }
}