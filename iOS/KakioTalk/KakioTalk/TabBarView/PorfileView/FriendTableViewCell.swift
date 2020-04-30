//
//  FriendTableViewCell.swift
//  KakioTalk
//
//  Created by 신한섭 on 2020/05/01.
//  Copyright © 2020 신한섭. All rights reserved.
//

import UIKit

class FriendTableViewCell: UITableViewCell {
    @IBOutlet weak var profileImage: UIImageView!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var statusLabel: UILabel!
    
    func configuration(user: User) {
        nameLabel.text = user.userName
        statusLabel.text = user.statusMessage
    }
    
    func setImageFromData(data: Data) {
        DispatchQueue.main.async {
            let image = UIImage(data: data)
            self.profileImage.image = image
        }
    }
}
