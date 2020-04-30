//
//  User.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

struct ModelFromServer: Decodable {
    var result: [User]
}

struct User: Decodable {
    var name: Name
    var email: String
    var picture: Picture
}

struct Name: Decodable {
    var firstName: String
    var lastName: String
}

struct Picture: Decodable {
    var large: String
    var medium: String
    var thumbnail: String
}
