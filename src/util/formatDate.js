export default function formatDate(date) {
    const yourDate = new Date(date)
    return yourDate.toISOString().split('T')[0]
}
