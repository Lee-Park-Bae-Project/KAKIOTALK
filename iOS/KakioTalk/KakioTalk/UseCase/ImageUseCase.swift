//
//  ImageUseCase.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation

struct ImageUseCase {
    static let cachesDirectory = FileManager.default.urls(for: .cachesDirectory, in: .userDomainMask).first!
    
    static func loadData(with manager: NetworkManager, from: String, failureHandler: @escaping (NetworkManager.NetworkError) -> (), completed: @escaping(Data) -> ()) {
        
        guard let url = URL(string: from) else {
            failureHandler(.InvalidURL)
            return
        }
        
        let imageURL = cachesDirectory.appendingPathComponent(url.pathComponents.filter{$0 != "/"}.map{$0}.joined())
        
        if FileManager.default.fileExists(atPath: imageURL.path) {
            handleData(from: imageURL, failureHandler: failureHandler, completed: completed)
        } else {
            manager.downloadResource(from: url) {
                switch $0 {
                case .failure(let error):
                    failureHandler(error)
                case .success(let url):
                    handleData(from: url, failureHandler: failureHandler, completed: completed)
                    try? FileManager.default.moveItem(at: url, to: imageURL)
                }
            }
        }
    }
    
    private static func handleData(from url: URL, failureHandler: @escaping (NetworkManager.NetworkError) -> (), completed: @escaping(Data) -> ()) {
        do {
            let data = try Data(contentsOf: url)
            completed(data)
        } catch {
            failureHandler(.DecodeError)
        }
    }
}
