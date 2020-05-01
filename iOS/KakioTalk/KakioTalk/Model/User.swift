//
//  User.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

struct ModelFromServer: Decodable {
    var data: [User]
}

struct User: Decodable {
    var id: String
    var userName: String
    var picture: Picture?
    var statusMessage: String
}

struct Picture: Decodable {
    var large: String
    var medium: String
    var thumbnail: String
}

struct DummyFirendsImage: Decodable {
    var results: [PictureList]
}

struct PictureList: Decodable {
    var picture: Picture
}