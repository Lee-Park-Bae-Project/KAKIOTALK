//
//  ViewController.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/04/04.
//  Copyright © 2020 신한섭. All rights reserved.
//

import UIKit
import GoogleSignIn

class LoginViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        GIDSignIn.sharedInstance()?.presentingViewController = self
        GIDSignIn.sharedInstance()?.restorePreviousSignIn()
        
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(test(_:)), name: Notification.Name(rawValue: "ToggleAuthUINotification"), object: nil)
    }
    
    @objc func test(_ notification: Notification) {
        guard let user = notification.userInfo?["statusText"] as? GIDGoogleUser else {return}
        guard let userId = user.userID, let idToken = user.authentication.idToken, let fullName = user.profile.name, let givenName = user.profile.givenName, let familyName = user.profile.familyName, let email = user.profile.email else {return}
        print(userId)
        print(idToken)
        print(fullName)
        print(givenName)
        print(familyName)
        print(email)
        
        guard let tabBarController = storyboard?.instantiateViewController(identifier: "TabBarController") as? UITabBarController else {return}
        tabBarController.modalPresentationStyle = .fullScreen
        present(tabBarController, animated: true)
    }
}

