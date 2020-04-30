//
//  NetworkManager.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import Foundation
import Alamofire

protocol NetworkManageable {
    func getResource(from: String, method: HTTPMethod, headers: HTTPHeaders?, handler : @escaping dataHandler)
}

typealias dataHandler = (Result<Data, NetworkManager.NetworkError>) -> Void
typealias downloadHandler = (Result<URL, NetworkManager.NetworkError>) -> Void

class NetworkManager: NetworkManageable {
    static var jwtToken: String?
    
    enum EndPoints {
        static let defaultURL = "https://randomuser.me/api/"
        static let users = "?results="
    }
    
    enum NetworkError: Error {
        case DataEmpty
        case DecodeError
        case InvalidHTTPResonse
        case InvalidStatusCode(Int)
        case InvalidURL
        case requestError
        
        func message() -> String {
            switch self {
            case .DataEmpty:
                return "데이터가 비었어요."
            case .DecodeError:
                return "응답을 복호화 하는 도중 문제가 발생했어요."
            case .InvalidHTTPResonse:
                return "HTTP 응답이 유효하지 않아요."
            case .InvalidStatusCode(let code):
                return "HTTP 응답 \(code) 에러 발생했어요."
            case .InvalidURL:
                return "URL이 유효하지 않아요."
            case .requestError:
                return "요청을 보내는 중에 오류가 발생했어요."
            }
        }
    }
    
    func downloadResource(from: URL, handler: @escaping downloadHandler) {
        URLSession.shared.downloadTask(with: from) { (url, response, error) in
            guard error == nil else {
                handler(.failure(.requestError))
                return
            }
            
            guard let httpResponse = response as? HTTPURLResponse else {
                handler(.failure(.InvalidHTTPResonse))
                return
            }
            
            guard httpResponse.statusCode == 200 else {
                handler(.failure(.InvalidStatusCode(httpResponse.statusCode)))
                return
            }
            
            guard let url = url else {
                handler(.failure(.DataEmpty))
                return
            }
            
            handler(.success(url))
        }.resume()
    }
    
    func getResource(from: String, method: HTTPMethod, headers: HTTPHeaders?, handler: @escaping dataHandler) {
        guard let url = URL(string: from) else {
            handler(.failure(.InvalidURL))
            return
        }
        
        URLSession.shared.dataTask(with: url) { (data, response, error) in
            guard error == nil else {
                handler(.failure(.requestError))
                return
            }
            
            guard let httpResponse = response as? HTTPURLResponse else {
                handler(.failure(.InvalidHTTPResonse))
                return
            }
            
            guard httpResponse.statusCode == 200 else {
                handler(.failure(.InvalidStatusCode(httpResponse.statusCode)))
                return
            }
            
            guard let data = data else {
                handler(.failure(.DataEmpty))
                return
            }
            
            handler(.success(data))
        }.resume()
    }
}
