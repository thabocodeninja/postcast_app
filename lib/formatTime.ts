export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remaingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remaingSeconds <10 ? "0" : ""}${remaingSeconds}`;
}