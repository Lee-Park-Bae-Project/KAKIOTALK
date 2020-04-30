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
    
    private(set) var userManager = UserManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
}
