var express = require('express');
var app = express();
app.set('view engine', 'ejs');
<<<<<<< HEAD
app.locals.jira = {"expand":"renderedFields,names,schema,transitions,operations,editmeta,changelog","id":"72699","self":"https://jira.freewebs.com/rest/api/2/issue/72699","key":"SUPPORT-1135","fields":{"issuetype":{"self":"https://jira.freewebs.com/rest/api/2/issuetype/5","id":"5","description":"The sub-task of the issue","iconUrl":"https://jira.freewebs.com/images/icons/issuetypes/subtask_alternate.png","name":"Sub-task","subtask":true},"parent":{"id":"72700","key":"SUPPORT-1136","self":"https://jira.freewebs.com/rest/api/2/issue/72700","fields":{"summary":"Migrate email to OpenSRS","status":{"self":"https://jira.freewebs.com/rest/api/2/status/1","description":"The issue is open and ready to be assigned.","iconUrl":"https://jira.freewebs.com/images/icons/statuses/generic.png","name":"Open","id":"1","statusCategory":{"self":"https://jira.freewebs.com/rest/api/2/statuscategory/2","id":2,"key":"new","colorName":"blue-gray","name":"To Do"}},"priority":{"self":"https://jira.freewebs.com/rest/api/2/priority/2","iconUrl":"https://jira.freewebs.com/images/icons/priorities/critical.png","name":"Major","id":"2"},"issuetype":{"self":"https://jira.freewebs.com/rest/api/2/issuetype/12","id":"12","description":"Standard non-bug task","iconUrl":"https://jira.freewebs.com/images/icons/issuetypes/documentation.png","name":"Story","subtask":false}}},"customfield_10190":null,"timespent":null,"customfield_10151":null,"customfield_12010":null,"project":{"self":"https://jira.freewebs.com/rest/api/2/project/10340","id":"10340","key":"SUPPORT","name":"Support Issues","avatarUrls":{"48x48":"https://jira.freewebs.com/secure/projectavatar?pid=10340&avatarId=10000","24x24":"https://jira.freewebs.com/secure/projectavatar?size=small&pid=10340&avatarId=10000","16x16":"https://jira.freewebs.com/secure/projectavatar?size=xsmall&pid=10340&avatarId=10000","32x32":"https://jira.freewebs.com/secure/projectavatar?size=medium&pid=10340&avatarId=10000"}},"customfield_10153":null,"fixVersions":[],"customfield_12210":null,"aggregatetimespent":null,"resolution":null,"customfield_10310":null,"customfield_10510":null,"customfield_10105":null,"customfield_11911":"0|i08ulr:","customfield_11910":"0|i08tan:","customfield_11912":"0|i08ulr:","resolutiondate":null,"workratio":-1,"lastViewed":null,"watches":{"self":"https://jira.freewebs.com/rest/api/2/issue/SUPPORT-1135/watchers","watchCount":2,"isWatching":false},"customfield_10180":null,"created":"2015-03-05T16:12:22.000-0500","customfield_10183":null,"customfield_10140":null,"priority":{"self":"https://jira.freewebs.com/rest/api/2/priority/2","iconUrl":"https://jira.freewebs.com/images/icons/priorities/critical.png","name":"Major","id":"2"},"customfield_11310":null,"customfield_10102":null,"labels":["DesignOnly"],"customfield_11510":"9223372036854775807","customfield_10103":null,"customfield_10611":null,"customfield_10811":null,"timeestimate":null,"aggregatetimeoriginalestimate":null,"versions":[],"issuelinks":[{"id":"47166","self":"https://jira.freewebs.com/rest/api/2/issueLink/47166","type":{"id":"10060","name":"Relation","inward":"is related to by","outward":"relates to","self":"https://jira.freewebs.com/rest/api/2/issueLinkType/10060"},"inwardIssue":{"id":"72700","key":"SUPPORT-1136","self":"https://jira.freewebs.com/rest/api/2/issue/72700","fields":{"summary":"Migrate email to OpenSRS","status":{"self":"https://jira.freewebs.com/rest/api/2/status/1","description":"The issue is open and ready to be assigned.","iconUrl":"https://jira.freewebs.com/images/icons/statuses/generic.png","name":"Open","id":"1","statusCategory":{"self":"https://jira.freewebs.com/rest/api/2/statuscategory/2","id":2,"key":"new","colorName":"blue-gray","name":"To Do"}},"priority":{"self":"https://jira.freewebs.com/rest/api/2/priority/2","iconUrl":"https://jira.freewebs.com/images/icons/priorities/critical.png","name":"Major","id":"2"},"issuetype":{"self":"https://jira.freewebs.com/rest/api/2/issuetype/12","id":"12","description":"Standard non-bug task","iconUrl":"https://jira.freewebs.com/images/icons/issuetypes/documentation.png","name":"Story","subtask":false}}}}],"assignee":{"self":"https://jira.freewebs.com/rest/api/2/user?username=Jeremy","name":"Jeremy","key":"jeremy","emailAddress":"jeremy@webs.com","avatarUrls":{"48x48":"https://jira.freewebs.com/secure/useravatar?avatarId=10172","24x24":"https://jira.freewebs.com/secure/useravatar?size=small&avatarId=10172","16x16":"https://jira.freewebs.com/secure/useravatar?size=xsmall&avatarId=10172","32x32":"https://jira.freewebs.com/secure/useravatar?size=medium&avatarId=10172"},"displayName":"Jeremy Ducore","active":true,"timeZone":"America/New_York"},"updated":"2015-05-06T13:36:12.000-0400","status":{"self":"https://jira.freewebs.com/rest/api/2/status/1","description":"The issue is open and ready to be assigned.","iconUrl":"https://jira.freewebs.com/images/icons/statuses/generic.png","name":"Open","id":"1","statusCategory":{"self":"https://jira.freewebs.com/rest/api/2/statuscategory/2","id":2,"key":"new","colorName":"blue-gray","name":"To Do"}},"components":[],"customfield_10170":null,"timeoriginalestimate":null,"customfield_12110":null,"description":"We have the ability to place Webs branding on our new Webmail interface through OpenSRS.\r\n\r\nThe branding can be mocked up on our VP openSRS account while we wait for the Webs OpenSRS account to be created.\r\n\r\nOpensrs.com - login - control panel - login \r\n(ask Jeremy for login credentials)\r\nEmail - Brands - WebsTest","customfield_12112":null,"customfield_12111":null,"customfield_10210":null,"customfield_10410":null,"timetracking":{},"attachment":[],"aggregatetimeestimate":null,"summary":"Branding for the Webs OpenSRS Email","creator":{"self":"https://jira.freewebs.com/rest/api/2/user?username=Jeremy","name":"Jeremy","key":"jeremy","emailAddress":"jeremy@webs.com","avatarUrls":{"48x48":"https://jira.freewebs.com/secure/useravatar?avatarId=10172","24x24":"https://jira.freewebs.com/secure/useravatar?size=small&avatarId=10172","16x16":"https://jira.freewebs.com/secure/useravatar?size=xsmall&avatarId=10172","32x32":"https://jira.freewebs.com/secure/useravatar?size=medium&avatarId=10172"},"displayName":"Jeremy Ducore","active":true,"timeZone":"America/New_York"},"subtasks":[],"customfield_11010":"2015-03-05T16:12:00.000-0500","reporter":{"self":"https://jira.freewebs.com/rest/api/2/user?username=Jeremy","name":"Jeremy","key":"jeremy","emailAddress":"jeremy@webs.com","avatarUrls":{"48x48":"https://jira.freewebs.com/secure/useravatar?avatarId=10172","24x24":"https://jira.freewebs.com/secure/useravatar?size=small&avatarId=10172","16x16":"https://jira.freewebs.com/secure/useravatar?size=xsmall&avatarId=10172","32x32":"https://jira.freewebs.com/secure/useravatar?size=medium&avatarId=10172"},"displayName":"Jeremy Ducore","active":true,"timeZone":"America/New_York"},"customfield_10121":null,"customfield_11210":"9223372036854775807","aggregateprogress":{"progress":0,"total":0},"customfield_11211":"9223372036854775807","customfield_11410":null,"customfield_11212":["com.atlassian.greenhopper.service.sprint.Sprint@29b30d1e[id=409,rapidViewId=148,state=ACTIVE,name=Sprint 2,startDate=2015-06-17T15:24:59.209-04:00,endDate=2015-07-01T15:24:00.000-04:00,completeDate=<null>,sequence=409]"],"customfield_11610":null,"customfield_10511":null,"environment":null,"customfield_10910":{"self":"https://jira.freewebs.com/rest/api/2/customFieldOption/10710","value":"Unassigned","id":"10710"},"duedate":null,"progress":{"progress":0,"total":0},"comment":{"startAt":0,"maxResults":0,"total":0,"comments":[]},"worklog":{"startAt":0,"maxResults":20,"total":0,"worklogs":[]}}};
=======



// sample ajax call?
app.get('handle',function(request,response){
//code to perform particular action.
//To access GET variable use.
//request.var1, request.var2 etc
});


app.locals.jira = {
    "expand": "renderedFields,names,schema,transitions,operations,editmeta,changelog",
    "id": "10002",
    "self": "http://www.example.com/jira/rest/api/2/issue/10002",
    "key": "EX-1",
    "fields": {
        "watcher": {
            "self": "http://www.example.com/jira/rest/api/2/issue/EX-1/watchers",
            "isWatching": false,
            "watchCount": 1,
            "watchers": [
                {
                    "self": "http://www.example.com/jira/rest/api/2/user?username=fred",
                    "name": "fred",
                    "displayName": "Fred F. User",
                    "active": false
                }
            ]
        },
        "attachment": [
            {
                "self": "http://www.example.com/jira/rest/api/2.0/attachments/10000",
                "filename": "picture.jpg",
                "author": {
                    "self": "http://www.example.com/jira/rest/api/2/user?username=fred",
                    "name": "fred",
                    "avatarUrls": {
                        "48x48": "http://www.example.com/jira/secure/useravatar?size=large&ownerId=fred",
                        "24x24": "http://www.example.com/jira/secure/useravatar?size=small&ownerId=fred",
                        "16x16": "http://www.example.com/jira/secure/useravatar?size=xsmall&ownerId=fred",
                        "32x32": "http://www.example.com/jira/secure/useravatar?size=medium&ownerId=fred"
                    },
                    "displayName": "Fred F. User",
                    "active": false
                },
                "created": "2015-06-10T08:45:28.711+0200",
                "size": 23123,
                "mimeType": "image/jpeg",
                "content": "http://www.example.com/jira/attachments/10000",
                "thumbnail": "http://www.example.com/jira/secure/thumbnail/10000"
            }
        ],
        "sub-tasks": [
            {
                "id": "10000",
                "type": {
                    "id": "10000",
                    "name": "",
                    "inward": "Parent",
                    "outward": "Sub-task"
                },
                "outwardIssue": {
                    "id": "10003",
                    "key": "EX-2",
                    "self": "http://www.example.com/jira/rest/api/2/issue/EX-2",
                    "fields": {
                        "status": {
                            "iconUrl": "http://www.example.com/jira//images/icons/statuses/open.png",
                            "name": "Open"
                        }
                    }
                }
            }
        ],
        "description": "example bug report",
        "project": {
            "self": "http://www.example.com/jira/rest/api/2/project/EX",
            "id": "10000",
            "key": "EX",
            "name": "Example",
            "avatarUrls": {
                "48x48": "http://www.example.com/jira/secure/projectavatar?size=large&pid=10000",
                "24x24": "http://www.example.com/jira/secure/projectavatar?size=small&pid=10000",
                "16x16": "http://www.example.com/jira/secure/projectavatar?size=xsmall&pid=10000",
                "32x32": "http://www.example.com/jira/secure/projectavatar?size=medium&pid=10000"
            },
            "projectCategory": {
                "self": "http://www.example.com/jira/rest/api/2/projectCategory/10000",
                "id": "10000",
                "name": "FIRST",
                "description": "First Project Category"
            }
        },
        "comment": [
            {
                "self": "http://www.example.com/jira/rest/api/2/issue/10010/comment/10000",
                "id": "10000",
                "author": {
                    "self": "http://www.example.com/jira/rest/api/2/user?username=fred",
                    "name": "fred",
                    "displayName": "Fred F. User",
                    "active": false
                },
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit. Duis eu justo eget augue iaculis fermentum. Sed semper quam laoreet nisi egestas at posuere augue semper.",
                "updateAuthor": {
                    "self": "http://www.example.com/jira/rest/api/2/user?username=fred",
                    "name": "fred",
                    "displayName": "Fred F. User",
                    "active": false
                },
                "created": "2015-06-10T08:45:28.663+0200",
                "updated": "2015-06-10T08:45:28.663+0200",
                "visibility": {
                    "type": "role",
                    "value": "Administrators"
                }
            }
        ],
        "issuelinks": [
            {
                "id": "10001",
                "type": {
                    "id": "10000",
                    "name": "Dependent",
                    "inward": "depends on",
                    "outward": "is depended by"
                },
                "outwardIssue": {
                    "id": "10004L",
                    "key": "PRJ-2",
                    "self": "http://www.example.com/jira/rest/api/2/issue/PRJ-2",
                    "fields": {
                        "status": {
                            "iconUrl": "http://www.example.com/jira//images/icons/statuses/open.png",
                            "name": "Open"
                        }
                    }
                }
            },
            {
                "id": "10002",
                "type": {
                    "id": "10000",
                    "name": "Dependent",
                    "inward": "depends on",
                    "outward": "is depended by"
                },
                "inwardIssue": {
                    "id": "10004",
                    "key": "PRJ-3",
                    "self": "http://www.example.com/jira/rest/api/2/issue/PRJ-3",
                    "fields": {
                        "status": {
                            "iconUrl": "http://www.example.com/jira//images/icons/statuses/open.png",
                            "name": "Open"
                        }
                    }
                }
            }
        ],
        "worklog": [
            {
                "self": "http://www.example.com/jira/rest/api/2/issue/10010/worklog/10000",
                "author": {
                    "self": "http://www.example.com/jira/rest/api/2/user?username=fred",
                    "name": "fred",
                    "displayName": "Fred F. User",
                    "active": false
                },
                "updateAuthor": {
                    "self": "http://www.example.com/jira/rest/api/2/user?username=fred",
                    "name": "fred",
                    "displayName": "Fred F. User",
                    "active": false
                },
                "comment": "I did some work here.",
                "visibility": {
                    "type": "group",
                    "value": "jira-developers"
                },
                "started": "2015-06-10T08:45:28.718+0200",
                "timeSpent": "3h 20m",
                "timeSpentSeconds": 12000,
                "id": "100028"
            }
        ],
        "updated": 1,
        "timetracking": {
            "originalEstimate": "10m",
            "remainingEstimate": "3m",
            "timeSpent": "6m",
            "originalEstimateSeconds": 600,
            "remainingEstimateSeconds": 200,
            "timeSpentSeconds": 400
        }
    },
    "names": {
        "watcher": "watcher",
        "attachment": "attachment",
        "sub-tasks": "sub-tasks",
        "description": "description",
        "project": "project",
        "comment": "comment",
        "issuelinks": "issuelinks",
        "worklog": "worklog",
        "updated": "updated",
        "timetracking": "timetracking"
    },
    "schema": {}
};
>>>>>>> origin/master
app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});