import React, { Component } from 'react';

class Card extends Component {

    render(){
        const profile = this.props;
        return(
            <div>
                <img src={profile.avatar_url} alt={profile.name} />
                <div>
                    <div>
                        <h3>{profile.name}</h3>
                        <p>{profile.bio}</p>
                        <a
                            href={`https://en.wikipedia.org/wiki/${profile.location}.com`}
                            target={"_blank"}
                            rel={"noreferrer"}
                        >
                            {profile.location}
                        </a>
                    </div>
                </div>
            </div>
        );
    };
};
export default Card;
