export class LocalStorageManager {
    static set(key: string, value: any) {
        if (!process.client) return

        localStorage.setItem(key, JSON.stringify(value))
    }

    static get(key: string) {
        if (!process.client) return

        const value = localStorage.getItem(key)

        return value ? JSON.parse(value) : null
    }

    static delete(key: string) {
        if (!process.client) return

        localStorage.removeItem(key)
    }
}
