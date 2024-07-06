import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_DEEPL_API_KEY;

const AutoTranslate = ({ children, language, setLanguage }) => {
  const [translatedContent, setTranslatedContent] = useState(null);

  useEffect(() => {
    const translateContent = async () => {
      if (language === 'en') {
        setTranslatedContent(null);
        return;
      }

      const content = React.Children.map(children, child => 
        typeof child === 'string' ? child : child.props.children
      ).join('\n');

      try {
        const response = await axios.post(
          'https://api-free.deepl.com/v2/translate',
          `auth_key=${API_KEY}&text=${encodeURIComponent(content)}&target_lang=FR`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        setTranslatedContent(response.data.translations[0].text.split('\n'));
      } catch (error) {
        console.error('Translation error:', error);
      }
    };

    translateContent();
  }, [children, language]);

  if (!translatedContent || language === 'en') return children;

  return React.Children.map(children, (child, index) => 
    React.cloneElement(child, {
      children: translatedContent[index] || child.props.children
    })
  );
};

export default AutoTranslate;