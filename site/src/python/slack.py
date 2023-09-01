import json
import requests

import os
from dotenv import load_dotenv

load_dotenv()
print(os.environ.get('SLACK_BOT'))


def post_message_to_slack(text, blocks = None):
    return requests.post('https://slack.com/api/chat.postMessage', {
        'token': os.environ.get('SLACK_BOT'),
        'channel': "C05NRC1NLCE",
        'icon_emoji': ":slack:",
        'text': text,
        'blocks': json.dumps(blocks) if blocks else None
    }).json()	

blocks = [{  
  "type": "section",
  "text": {  
    "type": "mrkdwn",
    "text": ":thumbsup: Blocos."
  }
}]

print(post_message_to_slack("Bom dia!", blocks=blocks))