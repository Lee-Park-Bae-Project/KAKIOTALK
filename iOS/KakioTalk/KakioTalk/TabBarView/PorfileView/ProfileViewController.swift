//
//  ProfileViewController.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/04/30.
//  Copyright © 2020 신한섭. All rights reserved.
//

import UIKit

class ProfileViewController: UIViewController {
    
    @IBOutlet weak var friendsTableView: UITableView!
    
    private let dataSource = FriendsTableViewDataSource()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureObserver()
        configureTableView()
        configureMyProfile()
        configureFriendsList()
    }
    
    private func configureObserver() {
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(setupTableView),
                                               name: .receiveFriendsList,
                                               object: nil)
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(setupImageView(_:)),
                                               name: .receiveFriendImage,
                                               object: nil)
    }
    
    private func configureMyProfile() {
        UserUseCase.loadMyProfile(networkManager: NetworkManager(), failureHandler: {
            self.errorHandling(error: $0)
        }) {
            self.dataSource.userManager.setMyProfile(profile: $0)
        }
    }
    
    private func configureFriendsList() {
        UserUseCase.loadFriendsList(networkManager: NetworkManager(), failureHandler: { self.errorHandling(error: $0)
        }) {
            self.dataSource.userManager.insertFriendsList(friendsList: $0)
            UserUseCase.loadFirendsImage(networkManager: NetworkManager(), numOfFriends: self.dataSource.userManager.friendsCount(), failureHandler: {
                self.errorHandling(error: $0)
            }) {
                self.dataSource.userManager.insertFirendsPicture(pictures: $0)
            }
        }
    }
    
    private func configureTableView() {
        friendsTableView.dataSource = dataSource
        friendsTableView.separatorStyle = .none
        friendsTableView.delegate = self
    }
    
    private func alertError(message: String) {
        DispatchQueue.main.async {
            let alert = UIAlertController(title: "문제가 생겼어요", message: message, preferredStyle: .alert)
            let ok = UIAlertAction(title: "넵...", style: .default)
            alert.addAction(ok)
            self.present(alert, animated: true)
        }
    }
    
    private func errorHandling(error: NetworkManager.NetworkError) {
        alertError(message: error.message())
    }
    
    @objc func setupTableView() {
        DispatchQueue.main.async {
            self.friendsTableView.reloadData()
            self.friendsTableView.frame = CGRect(x: 0, y: 0, width: self.view.frame.width * 0.9, height: self.friendsTableView.contentSize.height)
        }
    }
    
    @objc func setupImageView(_ notification: Notification) {
        guard let index = notification.userInfo?["index"] as? Int else {return}
        DispatchQueue.main.async {
            self.friendsTableView.reloadRows(at: [IndexPath(row: index, section: 1)], with: .automatic)
        }
    }
}

extension ProfileViewController: UITableViewDelegate {
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        if indexPath.section == 0 {
            return view.frame.height * 0.1
        } else {
            return view.frame.height * 0.07
        }
    }
}
