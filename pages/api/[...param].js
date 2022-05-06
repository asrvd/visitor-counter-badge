import { GetCount } from "../../lib/GetCount";

export default function handler(req, res) {
    GetCount(`${req.query.param[0]}-${req.query.param[1]}`).then(
        data => {
            fetch(`https://img.shields.io/badge/${(req.query.label) ? req.query.label : "Visitors"}-${data}-yellow?style=${(req.query.style) ? req.query.style : "for-the-badge"}&labelColor=${(req.query.color) ? req.query.labelColor : "2b2930"}&color=${(req.query.color) ? req.query.color : '5c5866'}`).then(
                response => response.arrayBuffer()
            ).then(
                buffer => {
                    res.setHeader('Content-Type', 'image/svg+xml');
                    res.status(200).send(Buffer.from(buffer));
                    res.end();
                }
            )
        }
    )
}