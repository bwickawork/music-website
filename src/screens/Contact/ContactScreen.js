import React from "react";
import { ContainerLg } from "../../components/section/Section";
import { ArticleTitle } from "../../components/text/Text";
import { FormSection, FormContainer, LeftColumn, Card, Form, SubmitRow, SubmitButton, RightColumn, RightContent, RightTitle, RightList } from "./styles";
import FormRow from "../../components/form/FormRow";

const ContactScreen = () => {
  return (
    <ContainerLg>
      <ArticleTitle>Contact</ArticleTitle>
      <FormSection>
        <FormContainer>
          <LeftColumn>
            <Card>
              <Form>
                <FormRow title={'First name'} placeholder={'First name'} />
                <FormRow title={'Last name'} placeholder={'Last name'} />
                <FormRow title={'Email'} placeholder={'your@email.com'} />
                <FormRow title={'Subject'} placeholder={'Message subject'} />
                <FormRow title={'Message'} placeholder={'Message description'} textarea={true} />
                <SubmitRow>
                  <SubmitButton type="submit" value="Send Message" />
                </SubmitRow>
              </Form>
            </Card>
          </LeftColumn>
          {/* <RightColumn>
            <RightContent>
              <RightTitle></RightTitle>
              <RightList>
                <li>Test</li>
                <li>Test</li>
              </RightList>
            </RightContent>
          </RightColumn> */}
        </FormContainer>
      </FormSection>
    </ContainerLg>
  );
};

export default ContactScreen;