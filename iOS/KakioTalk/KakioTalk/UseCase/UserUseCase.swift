//
//  UserUseCase.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

struct UserUseCase {
    static func loadMyProfile(networkManager: NetworkManager, failureHandler: @escaping (NetworkManager.NetworkError) -> () = {_ in}, completed: @escaping(User) -> ()) {
        completed(networkManager.getMyPlofile())
    }
}
