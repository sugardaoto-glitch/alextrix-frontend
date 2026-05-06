/**
 * Prompt templates for e-commerce copywriting tools.
 * Adapted from 302ai/302_e_commerce_copywriting_assistant.
 *
 * Each function takes the user's form inputs and returns an array of
 * chat messages ready to send to an OpenAI-compatible API via BYOK.
 */

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export type PromptBuilder = (params: Record<string, string>) => ChatMessage[];

export const ECOMMERCE_PROMPTS: Record<string, PromptBuilder> = {
  "ecom-keyword-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate some keywords based on the product information which i provided.
Return 10 results line by line in plain text, do not add explanations and notes.
The results must be in ${params.language}.
Following is the product information:<text>
${params.commodityInformation}
</text>`,
    },
  ],

  "ecom-listing-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a high quality product listing based on the following information.
The listing must includes title, description and key features.
The key features must has 10 items in bullet list.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Keywords: <text>${params.goodsKeywords}</text>
Product name: <text>${params.productName}</text>
Category: <text>${params.category}</text>
Selling points: <text>${params.sellingPoints}</text>`,
    },
  ],

  "ecom-search-term-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate backend search terms based on the product information which i provided.
You need to generate some search terms that are not mentioned in the original text but are related to the product, and ensure that users can search for this product.

Following is the product information:
${params.commodityInformation}

You must perform these actions in ${params.language}:
1. Collect and list some informations about the content, such as type, functional or style
2. Generate variant about these content which not mentioned in the original text
3. Generate 10 results line by line based on the variant infos`,
    },
  ],

  "ecom-product-description-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate 5 descriptions for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Following is the product information:

Title:
${params.productTitle}

Keywords:
${params.goodsKeywords}`,
    },
  ],

  "ecom-title-optimization": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate 5 optimized titles for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Following is the product information:
${params.goodsKeywords}`,
    },
  ],

  "ecom-product-description-optimization": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is optimize the product description for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text.

Following is the product information:

Title:
${params.productTitle}

Keywords:
${params.goodsKeywords}

Description:
${params.productDescription}`,
    },
  ],

  "ecom-listing-comparison": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Compare between the two product listings, and write a concise, professional report for marketing staff, and list the advantages and disadvantages.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Never wrapped the result in code block with \`\`\` or \`\`\`markdown.

Product A:
Title: <text>${params.productTitleA}</text>
Description: <text>${params.productDescriptionA}</text>
Key features: <text>
${params.mainFeaturesA}
</text>

Product B:
Title: <text>${params.productTitleB}</text>
Description: <text>${params.productDescriptionB}</text>
Key features: <text>
${params.mainFeaturesB}
</text>`,
    },
  ],

  "ecom-listing-optimization": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Read the product listing which i provided, and then generate a optimized version.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Never wrapped the result in code block with \`\`\` or \`\`\`markdown.

Title: <text>${params.productTitle}</text>
Description: <text>${params.productDescription}</text>
Key features: <text>
${params.mainFeatures}
</text>`,
    },
  ],

  "ecom-keyword-expansion": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate 10 variant keywords which related the original product based on the product information which i provided.
Make sure the result in high quality and professional.
You must use ${params.language} to return results plain text line by line, never add notes.

Following is the original keywords:
${params.goodsKeywords}`,
    },
  ],

  "ecom-title-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate 10 product titles for ${params.platform} based on the product information which i provided.
Make sure the result in high quality and professional.
The result language must be ${params.language}.
You must return results plain text line by line, never add explanations and notes.

Product name:<text>
${params.productName}
</text>

Brand:<text>
${params.brand}
</text>

Selling points:<text>
${params.coreSellingPoints}
</text>

Keywords:<text>
${params.goodsKeywords}
</text>`,
    },
  ],

  "ecom-tag-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is generate 10 related hashtags from product information which i provided.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Product information:
${params.commodityInformation}`,
    },
  ],

  "ecom-tag-extraction": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is extract related hashtags from product information which i provided.
You must use ${params.language} to return results plain text line by line, never add explanations and notes.

Title:
${params.productTitle}

Description:
${params.productDescription}`,
    },
  ],

  "ecom-keyword-extraction": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is extract keywords from product listing which i provided.

Product listing:<text>
${params.productListing}
</text>

List the keywords in ${params.language} line by line, do not add other content.`,
    },
  ],

  "ecom-model-analysis-suggestions": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Read the product information which i provided, and then write a modification suggestion report to help me improve market competitiveness.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Never wrapped the result in code block with \`\`\` or \`\`\`markdown.

Title: <text>${params.productTitle}</text>
Description: <text>${params.productDescription}</text>
Key features: <text>
${params.mainFeatures}
</text>`,
    },
  ],

  "ecom-keyword-recommendations": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Suggest some keywords for my product based on the following information.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.
Return 20 results.

Product name: <text>${params.productName}</text>
Keyword type: <text>${params.goodsKeywords}</text>`,
    },
  ],

  "ecom-listing-analysis": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Read the product listing which i provided, and then write a concise analyse report.
Add some suggestions for the listing.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Never wrapped the result in code block with \`\`\` or \`\`\`markdown.

Title: <text>${params.productTitle}</text>
Description: <text>${params.productDescription}</text>
Key features: <text>
${params.mainFeatures}
</text>`,
    },
  ],

  "ecom-user-profile-analysis": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a professional target user profile analysis report based on my input text.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Never wrapped the result in code block with \`\`\` or \`\`\`markdown.

Target user:<text>${params.targetUser}</text>`,
    },
  ],

  "ecom-customer-review-analysis": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
You task is analyse the customer comment and generate a concise report which i provided.
You must use ${params.language} to return results plain text, never add explanations and notes.

Comment:
${params.comment}`,
    },
  ],

  "ecom-email-reply-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me a Email reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Customer Email Content:<text>
${params.customerEmailContent}
</text>
Response topic:<text>${params.responseTopic}</text>
Customer name:<text>${params.customerName}</text>
Customer service name:<text>${params.customerServiceName}</text>`,
    },
  ],

  "ecom-aftersales-email-reply": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me a after-sales Email reply to my customer based on the information i provided.
You must follow my topic to write the email, the Email must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Customer Email Content:<text>
${params.customerEmailContent}
</text>`,
    },
  ],

  "ecom-review-reply-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me a comment reply to my customer based on the information i provided.
The reply must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Comment:<text>
${params.comment}
</text>`,
    },
  ],

  "ecom-negative-review-reply": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me a bad review reply to my customer based on the information i provided.
The reply must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Bad review:<text>
${params.comment}
</text>
Response topic:<text>${params.expectedResponse}</text>`,
    },
  ],

  "ecom-buyer-message-reply": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me a user message reply to my customer based on the information i provided.
The reply must be professional, friendly, concise and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

User message:<text>
${params.comment}
</text>
Response topic:<text>${params.expectedResponse}</text>`,
    },
  ],

  "ecom-ad-title-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me 10 ad title based on the information i provided, which the title must be creative, eye-catching, interesting and attract users to consume.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.

Product name:<text>${params.productName}</text>
Target user:<text>${params.targetUser}</text>`,
    },
  ],

  "ecom-review-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me 10 user comments for my product based on the information i provided, which the comments must be realistic, objective and reliable.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.

Product name:<text>${params.productName}</text>
Brand:<text>${params.brand}</text>`,
    },
  ],

  "ecom-post-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write me a product post content based on the title and SEO description i provided, which the post must be professional, easy to understand, eye-catching and creative.

Title:<text>${params.title}</text>
Description:<text>${params.description}</text>

You must write the post in your own words, you must use ${params.language} to write it, make sure that professional and fluent.
The format must be markdown, do not add any other contents.
Do not wrapped the result in code block with \`\`\` or \`\`\`markdown.`,
    },
  ],

  "ecom-popular-term-recommendations": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Based on the product description recommend me new 10 keywords which related and more popular, the new results could be not mentioned in the input text.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text line by line, never add explanations, greetings and notes.

Description:<text>${params.description}</text>`,
    },
  ],

  "ecom-promotion-suggestions": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a detailed promotion suggestion for my product.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Do not wrapped the result in code block with \`\`\` or \`\`\`markdown.

Product:<text>${params.productName}</text>`,
    },
  ],

  "ecom-inquiry-email-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Generate a inquiry email based on the information which i provided.
Make sure the result high quality and friendly.
You must use ${params.language} to write the result in plain text format, never add explanations, greetings and notes.

Product name: <text>${params.productName}</text>
Planning order quantity: <text>${params.orderQuantity}</text>
My company name: <text>${params.yourNameCompanyName}</text>`,
    },
  ],

  "ecom-influencer-invitation-letter": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a cooperation invite email for KOL/influencer collaboration based on the information which i provided.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Do not wrapped the result in code block with \`\`\` or \`\`\`markdown.

Store name:<text>${params.storeName}</text>
Product:<text>${params.products}</text>`,
    },
  ],

  "ecom-marketing-email-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a marketing email based on the information which i provided.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Do not wrapped the result in code block with \`\`\` or \`\`\`markdown.

Product name:<text>${params.productName}</text>
Key features:<text>
${params.keyFeatures}
</text>`,
    },
  ],

  "ecom-case-study-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a case study based on the information which i provided.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Do not wrapped the result in code block with \`\`\` or \`\`\`markdown.

Customer name:<text>${params.customerName}</text>
Product name or Brand:<text>${params.productNameOrBrand}</text>`,
    },
  ],

  "ecom-trade-development-letter": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a foreign trade development email based on the information which i provided.
You must follow my goal to write the email, the Email must be professional, friendly and high quality.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be markdown, never add explanations, greetings and notes.
Do not wrapped the result in code block with \`\`\` or \`\`\`markdown.

Receiver:<text>${params.receiver}</text>
Goal:<text>${params.goal}</text>
Product and company information:<text>
${params.productAndCompanyInformation}
</text>`,
    },
  ],

  "ecom-product-introduction-generation": (params) => [
    {
      role: "user",
      content: `You are a helpful assistant which expert in E-Commerce.
Write a high quality product introduction based on the keywords which i provided.
The result must be professional, eye-catching and creative.
Always return in ${params.language}, or translate into if the input text language different to the target language.
The format must be plain text, never add explanations, greetings and notes.

Keywords:<text>
${params.keywords}
</text>`,
    },
  ],
};
