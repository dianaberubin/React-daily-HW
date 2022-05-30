import React, {Component} from 'react'
import axios from 'axios';
import Avatar from './Avatar';

//https://randomuser.me/api/?results=10

export default class Main extends Component {
 
    state = { avatarArr : [] }
 
 async componentDidMount() { //פעולה אסינכרונית
 try {
     //נחכה שהבקשה תסתיים ורק אז נעשה לוג לקונסול, לראות שהכל עבד תקין
    const {data} = await axios.get('https://randomuser.me/api/?results=10');
    
    //map בהכרח מחזיר מערך באותו האורך
    const relevantData=data.results.map((avatarObj) => {
        return { 
            id: avatarObj.cell,  //  אך הוא לא ייחודי בנתונים האלה  אמור להיות ID
            img: avatarObj.picture.large,
            firstName: avatarObj.name.first,
            lastName: avatarObj.name.last,
         };  
    });

    this.setState({ avatarArr: relevantData});
 
    } catch (e) {
     console.log(e);
    } 
}

insertAvatars = () => {
    return  this.state.avatarArr.map((avatar) => (
            <Avatar
                key={avatar.id}
                imgUrl={avatar.img}
                firstName={avatar.firstName}
                lastName={avatar.lastName} 
            />
    ));
};

    render() {
        return (
        <div style={{display: 'flex', flexWrap:'wrap'}} >
            {this.insertAvatars()}
        </div>
        );
     }
}

