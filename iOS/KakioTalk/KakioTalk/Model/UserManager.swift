//
//  UserManager.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

class UserManager {
    var users: [[User]] = [[]]
    
    func setMyProfile(profile: User) {
        users.insert([profile], at: 0)
        NotificationCenter.default.post(name: .receiveMyProfile,
                                        object: nil)
    }
    
    func insertFriendsList(friendsList: [User]) {
        users.insert(friendsList, at: 1)
        NotificationCenter.default.post(name: .receiveFriendsList,
                                        object: nil)
    }
    
    func sectionCount() -> Int {
        return users.count
    }
    
    func usersCount(at section: Int) -> Int {
        return users[section].count
    }
    
    func friendsCount() -> Int {
        return users[1].count
    }
    
    func insertFirendsPicture(pictures: [PictureList]) {
        for (index, pictureList) in pictures.enumerated() {
            users[1][index].picture = pictureList.picture
            NotificationCenter.default.post(name: .receiveFriendImage,
                                            object: nil,
                                            userInfo: ["index":index])
        }
    }
    
    func userInfo(at indexPath: IndexPath) -> User{
        return users[indexPath.section][indexPath.row]
    }
}

extension Notification.Name {
    static let receiveMyProfile = Notification.Name("receiveMyProfile")
    static let receiveFriendsList = Notification.Name("receiveFriendsList")
    static let receiveFriendImage = Notification.Name("receiveFriendImage")
}
