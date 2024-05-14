export default function ContactTab({isLink = false, name, link}) {
    if (isLink) {
        return (
            <div className="contactItem">
                <a className="contactLink" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
            </div>
        )
    }
    else {
        return (
            <div className="contactItem">
                <p>{name}</p>
            </div>
        )
    }
}