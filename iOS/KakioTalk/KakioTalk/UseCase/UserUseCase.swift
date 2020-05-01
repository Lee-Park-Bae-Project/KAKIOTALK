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
    
    static func loadFirendsImage(networkManager: NetworkManager, numOfFriends: Int, failureHandler: @escaping (NetworkManager.NetworkError) -> () = {_ in}, completed: @escaping([PictureList]) -> ()) {
        networkManager.getFriendsImageList(numOfFriends: numOfFriends) {
            switch $0{
            case .failure(let error):
                failureHandler(error)
            case .success(let data):
                do {
                    let model = try JSONDecoder().decode(DummyFirendsImage.self, from: data)
                    completed(model.results)
                } catch {
                    print(error)
                    failureHandler(.DecodeError)
                }
            }
        }
    }
    
    static func loadFriendsList(networkManager: NetworkManager, failureHandler: @escaping (NetworkManager.NetworkError) -> () = {_ in}, completed: @escaping([User]) -> ()) {
        networkManager.getFriendsList {
            switch $0{
            case .failure(let error):
                failureHandler(error)
            case .success(let data):
                do {
                    let model = try JSONDecoder().decode(ModelFromServer.self, from: data)
                    completed(model.data)
                } catch {
                    print(error)
                    failureHandler(.DecodeError)
                }
            }
        }
    }
}
