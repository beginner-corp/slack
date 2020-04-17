// generated from scripts/generate-types

declare namespace Admin.Apps.Approve {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Apps.Restrict {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Apps.Approved.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Apps.Requests.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Apps.Restricted.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Conversations.SetTeams {
  export interface Params {
    token: any
    channel_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Emoji.Add {
  export interface Params {
    token: any
    name: any
    url: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Emoji.AddAlias {
  export interface Params {
    token: any
    alias_for: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Emoji.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Emoji.Remove {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Emoji.Rename {
  export interface Params {
    token: any
    name: any
    new_name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.InviteRequests.Approve {
  export interface Params {
    token: any
    invite_request_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.InviteRequests.Deny {
  export interface Params {
    token: any
    invite_request_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.InviteRequests.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.InviteRequests.Approved.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.InviteRequests.Denied.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Admins.List {
  export interface Params {
    token: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Create {
  export interface Params {
    token: any
    team_domain: any
    team_name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Owners.List {
  export interface Params {
    token: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Settings.Info {
  export interface Params {
    token: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Settings.SetDefaultChannels {
  export interface Params {
    token: any
    channel_ids: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Settings.SetDescription {
  export interface Params {
    token: any
    description: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Settings.SetDiscoverability {
  export interface Params {
    token: any
    discoverability: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Settings.SetIcon {
  export interface Params {
    token: any
    image_url: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Teams.Settings.SetName {
  export interface Params {
    token: any
    name: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.Assign {
  export interface Params {
    token: any
    team_id: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.Invite {
  export interface Params {
    token: any
    channel_ids: any
    email: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.List {
  export interface Params {
    token: any
    team_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.Remove {
  export interface Params {
    token: any
    team_id: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.SetAdmin {
  export interface Params {
    token: any
    team_id: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.SetExpiration {
  export interface Params {
    token: any
    expiration_ts: any
    team_id: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.SetOwner {
  export interface Params {
    token: any
    team_id: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.SetRegular {
  export interface Params {
    token: any
    team_id: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Admin.Users.Session.Reset {
  export interface Params {
    token: any
    user_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Api.Test {
  export interface Params {
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Permissions.Info {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Permissions.Request {
  export interface Params {
    token: any
    scopes: any
    trigger_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Permissions.Resources.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Permissions.Scopes.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Permissions.Users.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Permissions.Users.Request {
  export interface Params {
    token: any
    scopes: any
    trigger_id: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Apps.Uninstall {
  export interface Params {
    token: any
    client_id: any
    client_secret: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Auth.Revoke {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Auth.Test {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Bots.Info {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.Delete {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.DeleteScheduledMessage {
  export interface Params {
    token: any
    channel: any
    scheduled_message_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.GetPermalink {
  export interface Params {
    token: any
    channel: any
    message_ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.MeMessage {
  export interface Params {
    token: any
    channel: any
    text: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.PostEphemeral {
  export interface Params {
    token: any
    attachments: any
    channel: any
    text: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.PostMessage {
  export interface Params {
    token: any
    channel: any
    text: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.ScheduleMessage {
  export interface Params {
    token: any
    channel: any
    post_at: any
    text: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.Unfurl {
  export interface Params {
    token: any
    channel: any
    ts: any
    unfurls: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.Update {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Chat.ScheduledMessages.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Archive {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Close {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Create {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.History {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Info {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Invite {
  export interface Params {
    token: any
    channel: any
    users: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Join {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Kick {
  export interface Params {
    token: any
    channel: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Leave {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Members {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Open {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Rename {
  export interface Params {
    token: any
    channel: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Replies {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.SetPurpose {
  export interface Params {
    token: any
    channel: any
    purpose: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.SetTopic {
  export interface Params {
    token: any
    channel: any
    topic: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Conversations.Unarchive {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Dialog.Open {
  export interface Params {
    token: any
    dialog: any
    trigger_id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Dnd.EndDnd {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Dnd.EndSnooze {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Dnd.Info {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Dnd.SetSnooze {
  export interface Params {
    token: any
    num_minutes: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Dnd.TeamInfo {
  export interface Params {
    token: any
    users: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Emoji.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Comments.Delete {
  export interface Params {
    token: any
    file: any
    id: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Delete {
  export interface Params {
    token: any
    file: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Info {
  export interface Params {
    token: any
    file: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.RevokePublicURL {
  export interface Params {
    token: any
    file: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.SharedPublicURL {
  export interface Params {
    token: any
    file: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Upload {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Remote.Add {
  export interface Params {
    token: any
    external_id: any
    external_url: any
    title: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Remote.Info {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Remote.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Remote.Remove {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Remote.Share {
  export interface Params {
    token: any
    channels: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Files.Remote.Update {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Migration.Exchange {
  export interface Params {
    token: any
    users: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Oauth.Access {
  export interface Params {
    client_id: any
    client_secret: any
    code: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Oauth.Token {
  export interface Params {
    client_id: any
    client_secret: any
    code: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Oauth.V2.Access {
  export interface Params {
    code: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Pins.Add {
  export interface Params {
    token: any
    channel: any
    timestamp: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Pins.List {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Pins.Remove {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reactions.Add {
  export interface Params {
    token: any
    channel: any
    name: any
    timestamp: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reactions.Get {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reactions.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reactions.Remove {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reminders.Add {
  export interface Params {
    token: any
    text: any
    time: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reminders.Complete {
  export interface Params {
    token: any
    reminder: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reminders.Delete {
  export interface Params {
    token: any
    reminder: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reminders.Info {
  export interface Params {
    token: any
    reminder: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Reminders.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Rtm.Connect {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Rtm.Start {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Search.All {
  export interface Params {
    token: any
    query: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Search.Files {
  export interface Params {
    token: any
    query: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Search.Messages {
  export interface Params {
    token: any
    query: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Stars.Add {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Stars.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Stars.Remove {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Team.AccessLogs {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Team.BillableInfo {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Team.Info {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Team.IntegrationLogs {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Team.Profile.Get {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.Create {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.Disable {
  export interface Params {
    token: any
    usergroup: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.Enable {
  export interface Params {
    token: any
    usergroup: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.Update {
  export interface Params {
    token: any
    usergroup: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.Users.List {
  export interface Params {
    token: any
    usergroup: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Usergroups.Users.Update {
  export interface Params {
    token: any
    usergroup: any
    users: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.Conversations {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.DeletePhoto {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.GetPresence {
  export interface Params {
    token: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.Identity {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.Info {
  export interface Params {
    token: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.LookupByEmail {
  export interface Params {
    token: any
    email: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.SetActive {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.SetPhoto {
  export interface Params {
    token: any
    image: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.SetPresence {
  export interface Params {
    token: any
    presence: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.Profile.Get {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Users.Profile.Set {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Views.Open {
  export interface Params {
    token: any
    trigger_id: any
    view: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Views.Publish {
  export interface Params {
    token: any
    user_id: any
    view: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Views.Push {
  export interface Params {
    token: any
    trigger_id: any
    view: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Views.Update {
  export interface Params {
    token: any
    view: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Archive {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Create {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.History {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Info {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Invite {
  export interface Params {
    token: any
    channel: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Join {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Kick {
  export interface Params {
    token: any
    channel: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Leave {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Mark {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Rename {
  export interface Params {
    token: any
    channel: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Replies {
  export interface Params {
    token: any
    channel: any
    thread_ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.SetPurpose {
  export interface Params {
    token: any
    channel: any
    purpose: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.SetTopic {
  export interface Params {
    token: any
    channel: any
    topic: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Channels.Unarchive {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Archive {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Create {
  export interface Params {
    token: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.CreateChild {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.History {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Info {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Invite {
  export interface Params {
    token: any
    channel: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Kick {
  export interface Params {
    token: any
    channel: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Leave {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Mark {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Open {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Rename {
  export interface Params {
    token: any
    channel: any
    name: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Replies {
  export interface Params {
    token: any
    channel: any
    thread_ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.SetPurpose {
  export interface Params {
    token: any
    channel: any
    purpose: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.SetTopic {
  export interface Params {
    token: any
    channel: any
    topic: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Groups.Unarchive {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Im.Close {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Im.History {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Im.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Im.Mark {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Im.Open {
  export interface Params {
    token: any
    user: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Im.Replies {
  export interface Params {
    token: any
    channel: any
    thread_ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Mpim.Close {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Mpim.History {
  export interface Params {
    token: any
    channel: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Mpim.List {
  export interface Params {
    token: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Mpim.Mark {
  export interface Params {
    token: any
    channel: any
    ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Mpim.Open {
  export interface Params {
    token: any
    users: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare namespace Mpim.Replies {
  export interface Params {
    token: any
    channel: any
    thread_ts: any
    [optional: string]: any
  }
  
  export interface Response {
    ok: boolean
    [key: string]: any
  }
}

declare module "slack" {
  export let admin: {
    apps: {
      approve(params: Admin.Apps.Approve.Params): Promise<Admin.Apps.Approve.Response>
      approve(params: Admin.Apps.Approve.Params, callback: (params: Admin.Apps.Approve.Params) => void): void
      restrict(params: Admin.Apps.Restrict.Params): Promise<Admin.Apps.Restrict.Response>
      restrict(params: Admin.Apps.Restrict.Params, callback: (params: Admin.Apps.Restrict.Params) => void): void
      approved: {
        list(params: Admin.Apps.Approved.List.Params): Promise<Admin.Apps.Approved.List.Response>
        list(params: Admin.Apps.Approved.List.Params, callback: (params: Admin.Apps.Approved.List.Params) => void): void
      }
      requests: {
        list(params: Admin.Apps.Requests.List.Params): Promise<Admin.Apps.Requests.List.Response>
        list(params: Admin.Apps.Requests.List.Params, callback: (params: Admin.Apps.Requests.List.Params) => void): void
      }
      restricted: {
        list(params: Admin.Apps.Restricted.List.Params): Promise<Admin.Apps.Restricted.List.Response>
        list(params: Admin.Apps.Restricted.List.Params, callback: (params: Admin.Apps.Restricted.List.Params) => void): void
      }
    }
    conversations: {
      setTeams(params: Admin.Conversations.SetTeams.Params): Promise<Admin.Conversations.SetTeams.Response>
      setTeams(params: Admin.Conversations.SetTeams.Params, callback: (params: Admin.Conversations.SetTeams.Params) => void): void
    }
    emoji: {
      add(params: Admin.Emoji.Add.Params): Promise<Admin.Emoji.Add.Response>
      add(params: Admin.Emoji.Add.Params, callback: (params: Admin.Emoji.Add.Params) => void): void
      addAlias(params: Admin.Emoji.AddAlias.Params): Promise<Admin.Emoji.AddAlias.Response>
      addAlias(params: Admin.Emoji.AddAlias.Params, callback: (params: Admin.Emoji.AddAlias.Params) => void): void
      list(params: Admin.Emoji.List.Params): Promise<Admin.Emoji.List.Response>
      list(params: Admin.Emoji.List.Params, callback: (params: Admin.Emoji.List.Params) => void): void
      remove(params: Admin.Emoji.Remove.Params): Promise<Admin.Emoji.Remove.Response>
      remove(params: Admin.Emoji.Remove.Params, callback: (params: Admin.Emoji.Remove.Params) => void): void
      rename(params: Admin.Emoji.Rename.Params): Promise<Admin.Emoji.Rename.Response>
      rename(params: Admin.Emoji.Rename.Params, callback: (params: Admin.Emoji.Rename.Params) => void): void
    }
    inviteRequests: {
      approve(params: Admin.InviteRequests.Approve.Params): Promise<Admin.InviteRequests.Approve.Response>
      approve(params: Admin.InviteRequests.Approve.Params, callback: (params: Admin.InviteRequests.Approve.Params) => void): void
      deny(params: Admin.InviteRequests.Deny.Params): Promise<Admin.InviteRequests.Deny.Response>
      deny(params: Admin.InviteRequests.Deny.Params, callback: (params: Admin.InviteRequests.Deny.Params) => void): void
      list(params: Admin.InviteRequests.List.Params): Promise<Admin.InviteRequests.List.Response>
      list(params: Admin.InviteRequests.List.Params, callback: (params: Admin.InviteRequests.List.Params) => void): void
      approved: {
        list(params: Admin.InviteRequests.Approved.List.Params): Promise<Admin.InviteRequests.Approved.List.Response>
        list(params: Admin.InviteRequests.Approved.List.Params, callback: (params: Admin.InviteRequests.Approved.List.Params) => void): void
      }
      denied: {
        list(params: Admin.InviteRequests.Denied.List.Params): Promise<Admin.InviteRequests.Denied.List.Response>
        list(params: Admin.InviteRequests.Denied.List.Params, callback: (params: Admin.InviteRequests.Denied.List.Params) => void): void
      }
    }
    teams: {
      admins: {
        list(params: Admin.Teams.Admins.List.Params): Promise<Admin.Teams.Admins.List.Response>
        list(params: Admin.Teams.Admins.List.Params, callback: (params: Admin.Teams.Admins.List.Params) => void): void
      }
      create(params: Admin.Teams.Create.Params): Promise<Admin.Teams.Create.Response>
      create(params: Admin.Teams.Create.Params, callback: (params: Admin.Teams.Create.Params) => void): void
      list(params: Admin.Teams.List.Params): Promise<Admin.Teams.List.Response>
      list(params: Admin.Teams.List.Params, callback: (params: Admin.Teams.List.Params) => void): void
      owners: {
        list(params: Admin.Teams.Owners.List.Params): Promise<Admin.Teams.Owners.List.Response>
        list(params: Admin.Teams.Owners.List.Params, callback: (params: Admin.Teams.Owners.List.Params) => void): void
      }
      settings: {
        info(params: Admin.Teams.Settings.Info.Params): Promise<Admin.Teams.Settings.Info.Response>
        info(params: Admin.Teams.Settings.Info.Params, callback: (params: Admin.Teams.Settings.Info.Params) => void): void
        setDefaultChannels(params: Admin.Teams.Settings.SetDefaultChannels.Params): Promise<Admin.Teams.Settings.SetDefaultChannels.Response>
        setDefaultChannels(params: Admin.Teams.Settings.SetDefaultChannels.Params, callback: (params: Admin.Teams.Settings.SetDefaultChannels.Params) => void): void
        setDescription(params: Admin.Teams.Settings.SetDescription.Params): Promise<Admin.Teams.Settings.SetDescription.Response>
        setDescription(params: Admin.Teams.Settings.SetDescription.Params, callback: (params: Admin.Teams.Settings.SetDescription.Params) => void): void
        setDiscoverability(params: Admin.Teams.Settings.SetDiscoverability.Params): Promise<Admin.Teams.Settings.SetDiscoverability.Response>
        setDiscoverability(params: Admin.Teams.Settings.SetDiscoverability.Params, callback: (params: Admin.Teams.Settings.SetDiscoverability.Params) => void): void
        setIcon(params: Admin.Teams.Settings.SetIcon.Params): Promise<Admin.Teams.Settings.SetIcon.Response>
        setIcon(params: Admin.Teams.Settings.SetIcon.Params, callback: (params: Admin.Teams.Settings.SetIcon.Params) => void): void
        setName(params: Admin.Teams.Settings.SetName.Params): Promise<Admin.Teams.Settings.SetName.Response>
        setName(params: Admin.Teams.Settings.SetName.Params, callback: (params: Admin.Teams.Settings.SetName.Params) => void): void
      }
    }
    users: {
      assign(params: Admin.Users.Assign.Params): Promise<Admin.Users.Assign.Response>
      assign(params: Admin.Users.Assign.Params, callback: (params: Admin.Users.Assign.Params) => void): void
      invite(params: Admin.Users.Invite.Params): Promise<Admin.Users.Invite.Response>
      invite(params: Admin.Users.Invite.Params, callback: (params: Admin.Users.Invite.Params) => void): void
      list(params: Admin.Users.List.Params): Promise<Admin.Users.List.Response>
      list(params: Admin.Users.List.Params, callback: (params: Admin.Users.List.Params) => void): void
      remove(params: Admin.Users.Remove.Params): Promise<Admin.Users.Remove.Response>
      remove(params: Admin.Users.Remove.Params, callback: (params: Admin.Users.Remove.Params) => void): void
      setAdmin(params: Admin.Users.SetAdmin.Params): Promise<Admin.Users.SetAdmin.Response>
      setAdmin(params: Admin.Users.SetAdmin.Params, callback: (params: Admin.Users.SetAdmin.Params) => void): void
      setExpiration(params: Admin.Users.SetExpiration.Params): Promise<Admin.Users.SetExpiration.Response>
      setExpiration(params: Admin.Users.SetExpiration.Params, callback: (params: Admin.Users.SetExpiration.Params) => void): void
      setOwner(params: Admin.Users.SetOwner.Params): Promise<Admin.Users.SetOwner.Response>
      setOwner(params: Admin.Users.SetOwner.Params, callback: (params: Admin.Users.SetOwner.Params) => void): void
      setRegular(params: Admin.Users.SetRegular.Params): Promise<Admin.Users.SetRegular.Response>
      setRegular(params: Admin.Users.SetRegular.Params, callback: (params: Admin.Users.SetRegular.Params) => void): void
      session: {
        reset(params: Admin.Users.Session.Reset.Params): Promise<Admin.Users.Session.Reset.Response>
        reset(params: Admin.Users.Session.Reset.Params, callback: (params: Admin.Users.Session.Reset.Params) => void): void
      }
    }
  }
  
  export let api: {
    test(params: Api.Test.Params): Promise<Api.Test.Response>
    test(params: Api.Test.Params, callback: (params: Api.Test.Params) => void): void
  }
  
  export let apps: {
    permissions: {
      info(params: Apps.Permissions.Info.Params): Promise<Apps.Permissions.Info.Response>
      info(params: Apps.Permissions.Info.Params, callback: (params: Apps.Permissions.Info.Params) => void): void
      request(params: Apps.Permissions.Request.Params): Promise<Apps.Permissions.Request.Response>
      request(params: Apps.Permissions.Request.Params, callback: (params: Apps.Permissions.Request.Params) => void): void
      resources: {
        list(params: Apps.Permissions.Resources.List.Params): Promise<Apps.Permissions.Resources.List.Response>
        list(params: Apps.Permissions.Resources.List.Params, callback: (params: Apps.Permissions.Resources.List.Params) => void): void
      }
      scopes: {
        list(params: Apps.Permissions.Scopes.List.Params): Promise<Apps.Permissions.Scopes.List.Response>
        list(params: Apps.Permissions.Scopes.List.Params, callback: (params: Apps.Permissions.Scopes.List.Params) => void): void
      }
      users: {
        list(params: Apps.Permissions.Users.List.Params): Promise<Apps.Permissions.Users.List.Response>
        list(params: Apps.Permissions.Users.List.Params, callback: (params: Apps.Permissions.Users.List.Params) => void): void
        request(params: Apps.Permissions.Users.Request.Params): Promise<Apps.Permissions.Users.Request.Response>
        request(params: Apps.Permissions.Users.Request.Params, callback: (params: Apps.Permissions.Users.Request.Params) => void): void
      }
    }
    uninstall(params: Apps.Uninstall.Params): Promise<Apps.Uninstall.Response>
    uninstall(params: Apps.Uninstall.Params, callback: (params: Apps.Uninstall.Params) => void): void
  }
  
  export let auth: {
    revoke(params: Auth.Revoke.Params): Promise<Auth.Revoke.Response>
    revoke(params: Auth.Revoke.Params, callback: (params: Auth.Revoke.Params) => void): void
    test(params: Auth.Test.Params): Promise<Auth.Test.Response>
    test(params: Auth.Test.Params, callback: (params: Auth.Test.Params) => void): void
  }
  
  export let bots: {
    info(params: Bots.Info.Params): Promise<Bots.Info.Response>
    info(params: Bots.Info.Params, callback: (params: Bots.Info.Params) => void): void
  }
  
  export let chat: {
    delete(params: Chat.Delete.Params): Promise<Chat.Delete.Response>
    delete(params: Chat.Delete.Params, callback: (params: Chat.Delete.Params) => void): void
    deleteScheduledMessage(params: Chat.DeleteScheduledMessage.Params): Promise<Chat.DeleteScheduledMessage.Response>
    deleteScheduledMessage(params: Chat.DeleteScheduledMessage.Params, callback: (params: Chat.DeleteScheduledMessage.Params) => void): void
    getPermalink(params: Chat.GetPermalink.Params): Promise<Chat.GetPermalink.Response>
    getPermalink(params: Chat.GetPermalink.Params, callback: (params: Chat.GetPermalink.Params) => void): void
    meMessage(params: Chat.MeMessage.Params): Promise<Chat.MeMessage.Response>
    meMessage(params: Chat.MeMessage.Params, callback: (params: Chat.MeMessage.Params) => void): void
    postEphemeral(params: Chat.PostEphemeral.Params): Promise<Chat.PostEphemeral.Response>
    postEphemeral(params: Chat.PostEphemeral.Params, callback: (params: Chat.PostEphemeral.Params) => void): void
    postMessage(params: Chat.PostMessage.Params): Promise<Chat.PostMessage.Response>
    postMessage(params: Chat.PostMessage.Params, callback: (params: Chat.PostMessage.Params) => void): void
    scheduleMessage(params: Chat.ScheduleMessage.Params): Promise<Chat.ScheduleMessage.Response>
    scheduleMessage(params: Chat.ScheduleMessage.Params, callback: (params: Chat.ScheduleMessage.Params) => void): void
    unfurl(params: Chat.Unfurl.Params): Promise<Chat.Unfurl.Response>
    unfurl(params: Chat.Unfurl.Params, callback: (params: Chat.Unfurl.Params) => void): void
    update(params: Chat.Update.Params): Promise<Chat.Update.Response>
    update(params: Chat.Update.Params, callback: (params: Chat.Update.Params) => void): void
    scheduledMessages: {
      list(params: Chat.ScheduledMessages.List.Params): Promise<Chat.ScheduledMessages.List.Response>
      list(params: Chat.ScheduledMessages.List.Params, callback: (params: Chat.ScheduledMessages.List.Params) => void): void
    }
  }
  
  export let conversations: {
    archive(params: Conversations.Archive.Params): Promise<Conversations.Archive.Response>
    archive(params: Conversations.Archive.Params, callback: (params: Conversations.Archive.Params) => void): void
    close(params: Conversations.Close.Params): Promise<Conversations.Close.Response>
    close(params: Conversations.Close.Params, callback: (params: Conversations.Close.Params) => void): void
    create(params: Conversations.Create.Params): Promise<Conversations.Create.Response>
    create(params: Conversations.Create.Params, callback: (params: Conversations.Create.Params) => void): void
    history(params: Conversations.History.Params): Promise<Conversations.History.Response>
    history(params: Conversations.History.Params, callback: (params: Conversations.History.Params) => void): void
    info(params: Conversations.Info.Params): Promise<Conversations.Info.Response>
    info(params: Conversations.Info.Params, callback: (params: Conversations.Info.Params) => void): void
    invite(params: Conversations.Invite.Params): Promise<Conversations.Invite.Response>
    invite(params: Conversations.Invite.Params, callback: (params: Conversations.Invite.Params) => void): void
    join(params: Conversations.Join.Params): Promise<Conversations.Join.Response>
    join(params: Conversations.Join.Params, callback: (params: Conversations.Join.Params) => void): void
    kick(params: Conversations.Kick.Params): Promise<Conversations.Kick.Response>
    kick(params: Conversations.Kick.Params, callback: (params: Conversations.Kick.Params) => void): void
    leave(params: Conversations.Leave.Params): Promise<Conversations.Leave.Response>
    leave(params: Conversations.Leave.Params, callback: (params: Conversations.Leave.Params) => void): void
    list(params: Conversations.List.Params): Promise<Conversations.List.Response>
    list(params: Conversations.List.Params, callback: (params: Conversations.List.Params) => void): void
    members(params: Conversations.Members.Params): Promise<Conversations.Members.Response>
    members(params: Conversations.Members.Params, callback: (params: Conversations.Members.Params) => void): void
    open(params: Conversations.Open.Params): Promise<Conversations.Open.Response>
    open(params: Conversations.Open.Params, callback: (params: Conversations.Open.Params) => void): void
    rename(params: Conversations.Rename.Params): Promise<Conversations.Rename.Response>
    rename(params: Conversations.Rename.Params, callback: (params: Conversations.Rename.Params) => void): void
    replies(params: Conversations.Replies.Params): Promise<Conversations.Replies.Response>
    replies(params: Conversations.Replies.Params, callback: (params: Conversations.Replies.Params) => void): void
    setPurpose(params: Conversations.SetPurpose.Params): Promise<Conversations.SetPurpose.Response>
    setPurpose(params: Conversations.SetPurpose.Params, callback: (params: Conversations.SetPurpose.Params) => void): void
    setTopic(params: Conversations.SetTopic.Params): Promise<Conversations.SetTopic.Response>
    setTopic(params: Conversations.SetTopic.Params, callback: (params: Conversations.SetTopic.Params) => void): void
    unarchive(params: Conversations.Unarchive.Params): Promise<Conversations.Unarchive.Response>
    unarchive(params: Conversations.Unarchive.Params, callback: (params: Conversations.Unarchive.Params) => void): void
  }
  
  export let dialog: {
    open(params: Dialog.Open.Params): Promise<Dialog.Open.Response>
    open(params: Dialog.Open.Params, callback: (params: Dialog.Open.Params) => void): void
  }
  
  export let dnd: {
    endDnd(params: Dnd.EndDnd.Params): Promise<Dnd.EndDnd.Response>
    endDnd(params: Dnd.EndDnd.Params, callback: (params: Dnd.EndDnd.Params) => void): void
    endSnooze(params: Dnd.EndSnooze.Params): Promise<Dnd.EndSnooze.Response>
    endSnooze(params: Dnd.EndSnooze.Params, callback: (params: Dnd.EndSnooze.Params) => void): void
    info(params: Dnd.Info.Params): Promise<Dnd.Info.Response>
    info(params: Dnd.Info.Params, callback: (params: Dnd.Info.Params) => void): void
    setSnooze(params: Dnd.SetSnooze.Params): Promise<Dnd.SetSnooze.Response>
    setSnooze(params: Dnd.SetSnooze.Params, callback: (params: Dnd.SetSnooze.Params) => void): void
    teamInfo(params: Dnd.TeamInfo.Params): Promise<Dnd.TeamInfo.Response>
    teamInfo(params: Dnd.TeamInfo.Params, callback: (params: Dnd.TeamInfo.Params) => void): void
  }
  
  export let emoji: {
    list(params: Emoji.List.Params): Promise<Emoji.List.Response>
    list(params: Emoji.List.Params, callback: (params: Emoji.List.Params) => void): void
  }
  
  export let files: {
    comments: {
      delete(params: Files.Comments.Delete.Params): Promise<Files.Comments.Delete.Response>
      delete(params: Files.Comments.Delete.Params, callback: (params: Files.Comments.Delete.Params) => void): void
    }
    delete(params: Files.Delete.Params): Promise<Files.Delete.Response>
    delete(params: Files.Delete.Params, callback: (params: Files.Delete.Params) => void): void
    info(params: Files.Info.Params): Promise<Files.Info.Response>
    info(params: Files.Info.Params, callback: (params: Files.Info.Params) => void): void
    list(params: Files.List.Params): Promise<Files.List.Response>
    list(params: Files.List.Params, callback: (params: Files.List.Params) => void): void
    revokePublicURL(params: Files.RevokePublicURL.Params): Promise<Files.RevokePublicURL.Response>
    revokePublicURL(params: Files.RevokePublicURL.Params, callback: (params: Files.RevokePublicURL.Params) => void): void
    sharedPublicURL(params: Files.SharedPublicURL.Params): Promise<Files.SharedPublicURL.Response>
    sharedPublicURL(params: Files.SharedPublicURL.Params, callback: (params: Files.SharedPublicURL.Params) => void): void
    upload(params: Files.Upload.Params): Promise<Files.Upload.Response>
    upload(params: Files.Upload.Params, callback: (params: Files.Upload.Params) => void): void
    remote: {
      add(params: Files.Remote.Add.Params): Promise<Files.Remote.Add.Response>
      add(params: Files.Remote.Add.Params, callback: (params: Files.Remote.Add.Params) => void): void
      info(params: Files.Remote.Info.Params): Promise<Files.Remote.Info.Response>
      info(params: Files.Remote.Info.Params, callback: (params: Files.Remote.Info.Params) => void): void
      list(params: Files.Remote.List.Params): Promise<Files.Remote.List.Response>
      list(params: Files.Remote.List.Params, callback: (params: Files.Remote.List.Params) => void): void
      remove(params: Files.Remote.Remove.Params): Promise<Files.Remote.Remove.Response>
      remove(params: Files.Remote.Remove.Params, callback: (params: Files.Remote.Remove.Params) => void): void
      share(params: Files.Remote.Share.Params): Promise<Files.Remote.Share.Response>
      share(params: Files.Remote.Share.Params, callback: (params: Files.Remote.Share.Params) => void): void
      update(params: Files.Remote.Update.Params): Promise<Files.Remote.Update.Response>
      update(params: Files.Remote.Update.Params, callback: (params: Files.Remote.Update.Params) => void): void
    }
  }
  
  export let migration: {
    exchange(params: Migration.Exchange.Params): Promise<Migration.Exchange.Response>
    exchange(params: Migration.Exchange.Params, callback: (params: Migration.Exchange.Params) => void): void
  }
  
  export let oauth: {
    access(params: Oauth.Access.Params): Promise<Oauth.Access.Response>
    access(params: Oauth.Access.Params, callback: (params: Oauth.Access.Params) => void): void
    token(params: Oauth.Token.Params): Promise<Oauth.Token.Response>
    token(params: Oauth.Token.Params, callback: (params: Oauth.Token.Params) => void): void
    v2: {
      access(params: Oauth.V2.Access.Params): Promise<Oauth.V2.Access.Response>
      access(params: Oauth.V2.Access.Params, callback: (params: Oauth.V2.Access.Params) => void): void
    }
  }
  
  export let pins: {
    add(params: Pins.Add.Params): Promise<Pins.Add.Response>
    add(params: Pins.Add.Params, callback: (params: Pins.Add.Params) => void): void
    list(params: Pins.List.Params): Promise<Pins.List.Response>
    list(params: Pins.List.Params, callback: (params: Pins.List.Params) => void): void
    remove(params: Pins.Remove.Params): Promise<Pins.Remove.Response>
    remove(params: Pins.Remove.Params, callback: (params: Pins.Remove.Params) => void): void
  }
  
  export let reactions: {
    add(params: Reactions.Add.Params): Promise<Reactions.Add.Response>
    add(params: Reactions.Add.Params, callback: (params: Reactions.Add.Params) => void): void
    get(params: Reactions.Get.Params): Promise<Reactions.Get.Response>
    get(params: Reactions.Get.Params, callback: (params: Reactions.Get.Params) => void): void
    list(params: Reactions.List.Params): Promise<Reactions.List.Response>
    list(params: Reactions.List.Params, callback: (params: Reactions.List.Params) => void): void
    remove(params: Reactions.Remove.Params): Promise<Reactions.Remove.Response>
    remove(params: Reactions.Remove.Params, callback: (params: Reactions.Remove.Params) => void): void
  }
  
  export let reminders: {
    add(params: Reminders.Add.Params): Promise<Reminders.Add.Response>
    add(params: Reminders.Add.Params, callback: (params: Reminders.Add.Params) => void): void
    complete(params: Reminders.Complete.Params): Promise<Reminders.Complete.Response>
    complete(params: Reminders.Complete.Params, callback: (params: Reminders.Complete.Params) => void): void
    delete(params: Reminders.Delete.Params): Promise<Reminders.Delete.Response>
    delete(params: Reminders.Delete.Params, callback: (params: Reminders.Delete.Params) => void): void
    info(params: Reminders.Info.Params): Promise<Reminders.Info.Response>
    info(params: Reminders.Info.Params, callback: (params: Reminders.Info.Params) => void): void
    list(params: Reminders.List.Params): Promise<Reminders.List.Response>
    list(params: Reminders.List.Params, callback: (params: Reminders.List.Params) => void): void
  }
  
  export let rtm: {
    connect(params: Rtm.Connect.Params): Promise<Rtm.Connect.Response>
    connect(params: Rtm.Connect.Params, callback: (params: Rtm.Connect.Params) => void): void
    start(params: Rtm.Start.Params): Promise<Rtm.Start.Response>
    start(params: Rtm.Start.Params, callback: (params: Rtm.Start.Params) => void): void
  }
  
  export let search: {
    all(params: Search.All.Params): Promise<Search.All.Response>
    all(params: Search.All.Params, callback: (params: Search.All.Params) => void): void
    files(params: Search.Files.Params): Promise<Search.Files.Response>
    files(params: Search.Files.Params, callback: (params: Search.Files.Params) => void): void
    messages(params: Search.Messages.Params): Promise<Search.Messages.Response>
    messages(params: Search.Messages.Params, callback: (params: Search.Messages.Params) => void): void
  }
  
  export let stars: {
    add(params: Stars.Add.Params): Promise<Stars.Add.Response>
    add(params: Stars.Add.Params, callback: (params: Stars.Add.Params) => void): void
    list(params: Stars.List.Params): Promise<Stars.List.Response>
    list(params: Stars.List.Params, callback: (params: Stars.List.Params) => void): void
    remove(params: Stars.Remove.Params): Promise<Stars.Remove.Response>
    remove(params: Stars.Remove.Params, callback: (params: Stars.Remove.Params) => void): void
  }
  
  export let team: {
    accessLogs(params: Team.AccessLogs.Params): Promise<Team.AccessLogs.Response>
    accessLogs(params: Team.AccessLogs.Params, callback: (params: Team.AccessLogs.Params) => void): void
    billableInfo(params: Team.BillableInfo.Params): Promise<Team.BillableInfo.Response>
    billableInfo(params: Team.BillableInfo.Params, callback: (params: Team.BillableInfo.Params) => void): void
    info(params: Team.Info.Params): Promise<Team.Info.Response>
    info(params: Team.Info.Params, callback: (params: Team.Info.Params) => void): void
    integrationLogs(params: Team.IntegrationLogs.Params): Promise<Team.IntegrationLogs.Response>
    integrationLogs(params: Team.IntegrationLogs.Params, callback: (params: Team.IntegrationLogs.Params) => void): void
    profile: {
      get(params: Team.Profile.Get.Params): Promise<Team.Profile.Get.Response>
      get(params: Team.Profile.Get.Params, callback: (params: Team.Profile.Get.Params) => void): void
    }
  }
  
  export let usergroups: {
    create(params: Usergroups.Create.Params): Promise<Usergroups.Create.Response>
    create(params: Usergroups.Create.Params, callback: (params: Usergroups.Create.Params) => void): void
    disable(params: Usergroups.Disable.Params): Promise<Usergroups.Disable.Response>
    disable(params: Usergroups.Disable.Params, callback: (params: Usergroups.Disable.Params) => void): void
    enable(params: Usergroups.Enable.Params): Promise<Usergroups.Enable.Response>
    enable(params: Usergroups.Enable.Params, callback: (params: Usergroups.Enable.Params) => void): void
    list(params: Usergroups.List.Params): Promise<Usergroups.List.Response>
    list(params: Usergroups.List.Params, callback: (params: Usergroups.List.Params) => void): void
    update(params: Usergroups.Update.Params): Promise<Usergroups.Update.Response>
    update(params: Usergroups.Update.Params, callback: (params: Usergroups.Update.Params) => void): void
    users: {
      list(params: Usergroups.Users.List.Params): Promise<Usergroups.Users.List.Response>
      list(params: Usergroups.Users.List.Params, callback: (params: Usergroups.Users.List.Params) => void): void
      update(params: Usergroups.Users.Update.Params): Promise<Usergroups.Users.Update.Response>
      update(params: Usergroups.Users.Update.Params, callback: (params: Usergroups.Users.Update.Params) => void): void
    }
  }
  
  export let users: {
    conversations(params: Users.Conversations.Params): Promise<Users.Conversations.Response>
    conversations(params: Users.Conversations.Params, callback: (params: Users.Conversations.Params) => void): void
    deletePhoto(params: Users.DeletePhoto.Params): Promise<Users.DeletePhoto.Response>
    deletePhoto(params: Users.DeletePhoto.Params, callback: (params: Users.DeletePhoto.Params) => void): void
    getPresence(params: Users.GetPresence.Params): Promise<Users.GetPresence.Response>
    getPresence(params: Users.GetPresence.Params, callback: (params: Users.GetPresence.Params) => void): void
    identity(params: Users.Identity.Params): Promise<Users.Identity.Response>
    identity(params: Users.Identity.Params, callback: (params: Users.Identity.Params) => void): void
    info(params: Users.Info.Params): Promise<Users.Info.Response>
    info(params: Users.Info.Params, callback: (params: Users.Info.Params) => void): void
    list(params: Users.List.Params): Promise<Users.List.Response>
    list(params: Users.List.Params, callback: (params: Users.List.Params) => void): void
    lookupByEmail(params: Users.LookupByEmail.Params): Promise<Users.LookupByEmail.Response>
    lookupByEmail(params: Users.LookupByEmail.Params, callback: (params: Users.LookupByEmail.Params) => void): void
    setActive(params: Users.SetActive.Params): Promise<Users.SetActive.Response>
    setActive(params: Users.SetActive.Params, callback: (params: Users.SetActive.Params) => void): void
    setPhoto(params: Users.SetPhoto.Params): Promise<Users.SetPhoto.Response>
    setPhoto(params: Users.SetPhoto.Params, callback: (params: Users.SetPhoto.Params) => void): void
    setPresence(params: Users.SetPresence.Params): Promise<Users.SetPresence.Response>
    setPresence(params: Users.SetPresence.Params, callback: (params: Users.SetPresence.Params) => void): void
    profile: {
      get(params: Users.Profile.Get.Params): Promise<Users.Profile.Get.Response>
      get(params: Users.Profile.Get.Params, callback: (params: Users.Profile.Get.Params) => void): void
      set(params: Users.Profile.Set.Params): Promise<Users.Profile.Set.Response>
      set(params: Users.Profile.Set.Params, callback: (params: Users.Profile.Set.Params) => void): void
    }
  }
  
  export let views: {
    open(params: Views.Open.Params): Promise<Views.Open.Response>
    open(params: Views.Open.Params, callback: (params: Views.Open.Params) => void): void
    publish(params: Views.Publish.Params): Promise<Views.Publish.Response>
    publish(params: Views.Publish.Params, callback: (params: Views.Publish.Params) => void): void
    push(params: Views.Push.Params): Promise<Views.Push.Response>
    push(params: Views.Push.Params, callback: (params: Views.Push.Params) => void): void
    update(params: Views.Update.Params): Promise<Views.Update.Response>
    update(params: Views.Update.Params, callback: (params: Views.Update.Params) => void): void
  }
  
  export let channels: {
    archive(params: Channels.Archive.Params): Promise<Channels.Archive.Response>
    archive(params: Channels.Archive.Params, callback: (params: Channels.Archive.Params) => void): void
    create(params: Channels.Create.Params): Promise<Channels.Create.Response>
    create(params: Channels.Create.Params, callback: (params: Channels.Create.Params) => void): void
    history(params: Channels.History.Params): Promise<Channels.History.Response>
    history(params: Channels.History.Params, callback: (params: Channels.History.Params) => void): void
    info(params: Channels.Info.Params): Promise<Channels.Info.Response>
    info(params: Channels.Info.Params, callback: (params: Channels.Info.Params) => void): void
    invite(params: Channels.Invite.Params): Promise<Channels.Invite.Response>
    invite(params: Channels.Invite.Params, callback: (params: Channels.Invite.Params) => void): void
    join(params: Channels.Join.Params): Promise<Channels.Join.Response>
    join(params: Channels.Join.Params, callback: (params: Channels.Join.Params) => void): void
    kick(params: Channels.Kick.Params): Promise<Channels.Kick.Response>
    kick(params: Channels.Kick.Params, callback: (params: Channels.Kick.Params) => void): void
    leave(params: Channels.Leave.Params): Promise<Channels.Leave.Response>
    leave(params: Channels.Leave.Params, callback: (params: Channels.Leave.Params) => void): void
    list(params: Channels.List.Params): Promise<Channels.List.Response>
    list(params: Channels.List.Params, callback: (params: Channels.List.Params) => void): void
    mark(params: Channels.Mark.Params): Promise<Channels.Mark.Response>
    mark(params: Channels.Mark.Params, callback: (params: Channels.Mark.Params) => void): void
    rename(params: Channels.Rename.Params): Promise<Channels.Rename.Response>
    rename(params: Channels.Rename.Params, callback: (params: Channels.Rename.Params) => void): void
    replies(params: Channels.Replies.Params): Promise<Channels.Replies.Response>
    replies(params: Channels.Replies.Params, callback: (params: Channels.Replies.Params) => void): void
    setPurpose(params: Channels.SetPurpose.Params): Promise<Channels.SetPurpose.Response>
    setPurpose(params: Channels.SetPurpose.Params, callback: (params: Channels.SetPurpose.Params) => void): void
    setTopic(params: Channels.SetTopic.Params): Promise<Channels.SetTopic.Response>
    setTopic(params: Channels.SetTopic.Params, callback: (params: Channels.SetTopic.Params) => void): void
    unarchive(params: Channels.Unarchive.Params): Promise<Channels.Unarchive.Response>
    unarchive(params: Channels.Unarchive.Params, callback: (params: Channels.Unarchive.Params) => void): void
  }
  
  export let groups: {
    archive(params: Groups.Archive.Params): Promise<Groups.Archive.Response>
    archive(params: Groups.Archive.Params, callback: (params: Groups.Archive.Params) => void): void
    create(params: Groups.Create.Params): Promise<Groups.Create.Response>
    create(params: Groups.Create.Params, callback: (params: Groups.Create.Params) => void): void
    createChild(params: Groups.CreateChild.Params): Promise<Groups.CreateChild.Response>
    createChild(params: Groups.CreateChild.Params, callback: (params: Groups.CreateChild.Params) => void): void
    history(params: Groups.History.Params): Promise<Groups.History.Response>
    history(params: Groups.History.Params, callback: (params: Groups.History.Params) => void): void
    info(params: Groups.Info.Params): Promise<Groups.Info.Response>
    info(params: Groups.Info.Params, callback: (params: Groups.Info.Params) => void): void
    invite(params: Groups.Invite.Params): Promise<Groups.Invite.Response>
    invite(params: Groups.Invite.Params, callback: (params: Groups.Invite.Params) => void): void
    kick(params: Groups.Kick.Params): Promise<Groups.Kick.Response>
    kick(params: Groups.Kick.Params, callback: (params: Groups.Kick.Params) => void): void
    leave(params: Groups.Leave.Params): Promise<Groups.Leave.Response>
    leave(params: Groups.Leave.Params, callback: (params: Groups.Leave.Params) => void): void
    list(params: Groups.List.Params): Promise<Groups.List.Response>
    list(params: Groups.List.Params, callback: (params: Groups.List.Params) => void): void
    mark(params: Groups.Mark.Params): Promise<Groups.Mark.Response>
    mark(params: Groups.Mark.Params, callback: (params: Groups.Mark.Params) => void): void
    open(params: Groups.Open.Params): Promise<Groups.Open.Response>
    open(params: Groups.Open.Params, callback: (params: Groups.Open.Params) => void): void
    rename(params: Groups.Rename.Params): Promise<Groups.Rename.Response>
    rename(params: Groups.Rename.Params, callback: (params: Groups.Rename.Params) => void): void
    replies(params: Groups.Replies.Params): Promise<Groups.Replies.Response>
    replies(params: Groups.Replies.Params, callback: (params: Groups.Replies.Params) => void): void
    setPurpose(params: Groups.SetPurpose.Params): Promise<Groups.SetPurpose.Response>
    setPurpose(params: Groups.SetPurpose.Params, callback: (params: Groups.SetPurpose.Params) => void): void
    setTopic(params: Groups.SetTopic.Params): Promise<Groups.SetTopic.Response>
    setTopic(params: Groups.SetTopic.Params, callback: (params: Groups.SetTopic.Params) => void): void
    unarchive(params: Groups.Unarchive.Params): Promise<Groups.Unarchive.Response>
    unarchive(params: Groups.Unarchive.Params, callback: (params: Groups.Unarchive.Params) => void): void
  }
  
  export let im: {
    close(params: Im.Close.Params): Promise<Im.Close.Response>
    close(params: Im.Close.Params, callback: (params: Im.Close.Params) => void): void
    history(params: Im.History.Params): Promise<Im.History.Response>
    history(params: Im.History.Params, callback: (params: Im.History.Params) => void): void
    list(params: Im.List.Params): Promise<Im.List.Response>
    list(params: Im.List.Params, callback: (params: Im.List.Params) => void): void
    mark(params: Im.Mark.Params): Promise<Im.Mark.Response>
    mark(params: Im.Mark.Params, callback: (params: Im.Mark.Params) => void): void
    open(params: Im.Open.Params): Promise<Im.Open.Response>
    open(params: Im.Open.Params, callback: (params: Im.Open.Params) => void): void
    replies(params: Im.Replies.Params): Promise<Im.Replies.Response>
    replies(params: Im.Replies.Params, callback: (params: Im.Replies.Params) => void): void
  }
  
  export let mpim: {
    close(params: Mpim.Close.Params): Promise<Mpim.Close.Response>
    close(params: Mpim.Close.Params, callback: (params: Mpim.Close.Params) => void): void
    history(params: Mpim.History.Params): Promise<Mpim.History.Response>
    history(params: Mpim.History.Params, callback: (params: Mpim.History.Params) => void): void
    list(params: Mpim.List.Params): Promise<Mpim.List.Response>
    list(params: Mpim.List.Params, callback: (params: Mpim.List.Params) => void): void
    mark(params: Mpim.Mark.Params): Promise<Mpim.Mark.Response>
    mark(params: Mpim.Mark.Params, callback: (params: Mpim.Mark.Params) => void): void
    open(params: Mpim.Open.Params): Promise<Mpim.Open.Response>
    open(params: Mpim.Open.Params, callback: (params: Mpim.Open.Params) => void): void
    replies(params: Mpim.Replies.Params): Promise<Mpim.Replies.Response>
    replies(params: Mpim.Replies.Params, callback: (params: Mpim.Replies.Params) => void): void
  }
}