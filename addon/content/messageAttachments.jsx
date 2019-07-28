/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Thunderbird Conversations
 *
 * The Initial Developer of the Original Code is
 *  Jonathan Protzenko <jonathan.protzenko@gmail.com>
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/* globals React, topMail3Pane, StringBundle */
/* exported AttachmentMenu */

class AttachmentMenu extends React.PureComponent {
  constructor() {
    super();
    this.strings = new StringBundle("chrome://conversations/locale/pages.properties");
    this.open = this.open.bind(this);
    this.save = this.save.bind(this);
    this.detach = this.detach.bind(this);
    this.delete = this.delete.bind(this);
  }

  /**
   * This function finds the right node that holds the attachment information
   * and returns its information.
   *
   * @returns {object} The attachment information.
   */
  get currentAttInfo() {
    let node = topMail3Pane(window).document.popupNode;
    while (!node.attInfo)
      node = node.parentNode;
    return node.attInfo;
  }

  open() {
    this.currentAttInfo.open();
  }

  save() {
    this.currentAttInfo.save();
  }

  detach() {
    this.currentAttInfo.detach(true);
  }

  delete() {
    this.currentAttInfo.detach(false);
  }

  render() {
    return (
      <menu id="attachmentMenu" type="context">
        <menuitem
          label={this.strings.get("stub.context.open")}
          onClick={this.open}>
        </menuitem>
        <menuitem
          label={this.strings.get("stub.context.save")}
          onClick={this.save}>
        </menuitem>
        <menuitem
          label={this.strings.get("stub.context.detach")}
          onClick={this.detach}>
        </menuitem>
        <menuitem
          label={this.strings.get("stub.context.delete")}
          onClick={this.delete}>
        </menuitem>
      </menu>
    );
  }
}