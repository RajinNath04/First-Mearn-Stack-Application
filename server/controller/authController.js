export const responseMessage = (req, res) => {
    res.status(200).send(`your text ${req.params.message}`)
}