//
//  ViewController.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/04/04.
//  Copyright © 2020 신한섭. All rights reserved.
//

import UIKit
import GoogleSignIn

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        GIDSignIn.sharedInstance()?.presentingViewController = self
        
        // Automatically sign in the user.
        GIDSignIn.sharedInstance()?.restorePreviousSignIn()
        
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(GoogleOAuth(_:)), name: Notification.Name(rawValue: "ToggleAuthUINotification"), object: nil)
    }
    
    @objc func GoogleOAuth(_ notification: Notification) {
        guard let user = notification.userInfo?["statusText"] as? GIDGoogleUser else {return}
        _ = user.userID                  // For client-side use only!
        _ = user.authentication.idToken // Safe to send to the server
        _ = user.profile.name
        _ = user.profile.givenName
        _ = user.profile.familyName
        _ = user.profile.email
    }
}

