import PropTypes from 'prop-types'

function Card({ name, jobTitle, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{name}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{jobTitle}</span>
        </div>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

export default Card
