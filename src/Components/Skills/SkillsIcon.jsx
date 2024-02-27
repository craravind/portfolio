

export const SkillsIcon = (props) => {
    const{Icons, Name, Level} = props.data;
    return (
        <div className="Icons">
            <img src={Icons} alt={Name} className="img" />
            <div className="LevelIndicate"><p className="Level">{Level}</p></div>
            <p className="IconName">{Name}</p>
        </div>
    )
}
