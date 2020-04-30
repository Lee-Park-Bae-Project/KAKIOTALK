//
//  UserManager.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

class UserManager {
    var me: User?
    var friends: [User] = []
    
    func setMyProfile(profile: User) {
        me = profile
        NotificationCenter.default.post(name: .receiveMyProfile,
                                        object: nil)
    }
    
    func friendsCount() -> Int {
        return friends.count
    }
    
    func friendInfo(at index: Int) -> User{
        return friends[index]
    }
}

extension Notification.Name {
    static let receiveMyProfile = Notification.Name("receiveMyProfile")
}
