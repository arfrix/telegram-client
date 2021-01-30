import images from '../res/images'

export function FetchContacts({dispatcher}) {

    const data = [
        {
            name:'ali',
            phoneNumber: 9809120003335 ,
            profilePic: images.image.profilePicSample2.default
        },
        {
            name:'arash',
            phoneNumber: 9809120553335 ,
            profilePic: images.image.profilePicSample4.default
        },
        {
            name:'mohamad',
            phoneNumber: 9809124403335 ,
            profilePic: images.image.profilePicSample5.default
        },
        {
            name:'neda',
            phoneNumber: 9809120903335 ,
            profilePic: images.image.profilePicSample3.default
        },
    ]
    
    dispatcher({
        type: 'GET_CONTACTS_SUCCESSFUL',
        payload: data
    })
  
}

export function FetchChats({dispatcher}) {
    const data = [
        {
            name:'ali',
            profilePic: images.image.profilePicSample2.default,
            messages:[
                {
                    from: 'arfa',
                    to: 'ali',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'ali',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'ali',
                    type: 'simple',
                    message: 'khobi ?'
                }
            ]
        },
        {
            name:'arash',
            profilePic: images.image.profilePicSample4.default,
            messages:[
                {
                    from: 'arfa',
                    to: 'arash',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arash',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'arash',
                    type: 'simple',
                    message: 'khobi ?????????'
                }
            ]
        },
        {
            name:'mohamad',
            profilePic: images.image.profilePicSample5.default,
            messages:[
                {
                    from: 'arfa',
                    to: 'mohamad',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'mohamad',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'mohamad',
                    type: 'simple',
                    message: 'khobi ?'
                }
            ]
        },
        {
            name:'neda',
            profilePic: images.image.profilePicSample3.default,
            messages:[
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'neda',
                    to: 'arfa',
                    type: 'simple',
                    message: 'salam'
                },
                {
                    from: 'arfa',
                    to: 'neda',
                    type: 'simple',
                    message: 'khobi ?'
                },
            ]
        }
    ]
    
    dispatcher({
        type: 'GET_CHATS_SUCCESSFUL',
        payload: data
    })
}

export function postMessage({dispatcher, chatData: data}) {
    console.log("feeeeeer")
    dispatcher({
        type: 'SEND_MESSAGE_SUCCESSFUL',
        payload: data
    })
}