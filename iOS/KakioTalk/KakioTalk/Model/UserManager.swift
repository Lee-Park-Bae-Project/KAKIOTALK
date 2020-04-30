//
//  UserManager.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

class UserManager {
    let me: User = User(id: "hanseop95", userName: "신한섭", picture: Picture(large: "https://avatars1.githubusercontent.com/u/37682858?s=460&u=c0b30709b1fa60e649320e73039ca4e4c874e221&v=4", medium: "https://avatars1.githubusercontent.com/u/37682858?s=460&u=c0b30709b1fa60e649320e73039ca4e4c874e221&v=4", thumbnail: "https://avatars1.githubusercontent.com/u/37682858?s=460&u=c0b30709b1fa60e649320e73039ca4e4c874e221&v=4"), statusMessage: "상태메세지")
    var friends: [User] = []
    
    func friendsCount() -> Int {
        return friends.count
    }
    
    func friendInfo(at index: Int) -> User{
        return friends[index]
    }
}
