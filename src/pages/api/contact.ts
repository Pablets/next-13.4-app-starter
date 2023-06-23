import type { NextApiRequest, NextApiResponse } from 'next';
const portalId = process.env.PORTAL_ID || '';
const formId = process.env.FORM_ID || '';
const bearerToken = process.env.HUBSPOT_AUTH_TOKEN || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postUrl = `https://api.hsforms.com/submissions/v3/integration/secure/submit/${portalId}/${formId}`;

  const { email, name, message, linkedin } = JSON.parse(req.body);

  const body = {
    fields: [
      {
        objectTypeId: '0-1',
        name: 'email',
        value: email,
      },
      {
        objectTypeId: '0-1',
        name: 'firstname',
        value: name,
      },
      {
        objectTypeId: '0-1',
        name: 'message',
        value: message,
      },
      {
        objectTypeId: '0-1',
        name: 'website',
        value: linkedin,
      },
    ],
  };

  try {
    const response = await fetch(postUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      }),
    });
    if (response.status === 200) {
      const data = await response.json();
      res.status(200).json({ data });
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    res.json(error);
  }
}
