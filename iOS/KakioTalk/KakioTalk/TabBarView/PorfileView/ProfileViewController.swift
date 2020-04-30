//
//  ProfileViewController.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/04/30.
//  Copyright © 2020 신한섭. All rights reserved.
//

import UIKit

class ProfileViewController: UIViewController {
    
    @IBOutlet weak var profileImage: UIImageView!
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var statusMessage: UILabel!
    @IBOutlet weak var friendsTableView: UITableView!
    
    private(set) var userManager = UserManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        configureObserver()
        configureMyProfile()
    }
    
    func configureObserver() {
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(setupMyProfileUI),
                                               name: .receiveMyProfile,
                                               object: nil)
    }
    
    func configureMyProfile() {
        UserUseCase.loadMyProfile(networkManager: NetworkManager(), failureHandler: {
            self.errorHandling(error: $0)
        }) {
            self.userManager.setMyProfile(profile: $0)
        }
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
    
    @objc func setupMyProfileUI() {
        name.text = userManager.me?.userName
        statusMessage.text = userManager.me?.statusMessage
        
        let imageURL = userManager.me?.picture?.thumbnail ?? ""
        ImageUseCase.loadData(with: NetworkManager(), from: imageURL, failureHandler: {
            self.errorHandling(error: $0)
        }) {data in
            DispatchQueue.main.async {
                self.profileImage.image = UIImage(data: data)
                self.profileImage.layer.cornerRadius = (self.profileImage.frame.height) / 3
            }
        }
    }
}
