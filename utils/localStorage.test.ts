import { beforeAll, expect, describe, afterEach, it } from "vitest"
import { LocalStorageManager } from "./localStorage"

// Mocking localStorage
const localStorageMock = (() => {
    let store: { [key: string]: string } = {}
    return {
        getItem(key: string) {
            return store[key] || null
        },
        setItem(key: string, value: string) {
            store[key] = value
        },
        removeItem(key: string) {
            delete store[key]
        },
        clear() {
            store = {}
        },
    }
})()

describe("LocalStorageManager", () => {
    beforeAll(() => {
        // @ts-ignore
        global.localStorage = localStorageMock
        // Mocking process.client to always be true for these tests
        // @ts-ignore
        global.process = { client: true }
    })

    afterEach(() => {
        localStorage.clear()
    })

    it("sets an item in localStorage", () => {
        LocalStorageManager.set("testKey", { data: "testData" })
        expect(JSON.parse(localStorage.getItem("testKey")!)).toEqual({ data: "testData" })
    })

    it("gets an item from localStorage", () => {
        localStorage.setItem("testKey", JSON.stringify({ data: "testData" }))
        const value = LocalStorageManager.get("testKey")
        expect(value).toEqual({ data: "testData" })
    })

    it("returns null if item does not exist in localStorage", () => {
        const value = LocalStorageManager.get("nonExistentKey")
        expect(value).toBeNull()
    })

    it("deletes an item from localStorage", () => {
        localStorage.setItem("testKey", JSON.stringify({ data: "testData" }))
        LocalStorageManager.delete("testKey")
        expect(localStorage.getItem("testKey")).toBeNull()
    })

    it("does nothing if process.client is false", () => {
        // @ts-ignore
        global.process.client = false
        LocalStorageManager.set("testKey", { data: "testData" })
        expect(localStorage.getItem("testKey")).toBeNull()
    })
})
