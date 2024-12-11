export const isAdministrator = (userId: string | null | undefined) => {
    return userId === process.env.NEXT_PUBLIC_ADMINISTRATOR; // Replace with the actual user ID
}