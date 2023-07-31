import './home.scss';
import React, { useRef } from 'react';
import GenAIBox from '../../../shared/storybook/Box/GenAIBox';
import GenAIGrid from '../../../shared/storybook/Grid/GenAIGrid';
import GenAITypography from '../../../shared/storybook/Typography/GenAITypography';
import { GenAIButtonInvisible } from '../../../shared/storybook/Buttons/GenAIButtonInvisible';
import { GenAIButtonContained } from '../../../shared/storybook/Buttons/GenAIButtonContained';
import { GenAIButtonOutlined } from '../../../shared/storybook/Buttons/GenAIButtonOutlined';
import { GenAITextFieldMedium } from '../../../shared/storybook/TextField/GenAITextFieldMedium/GenAITextFieldMedium';
import { ReactComponent as ToolTipIcon } from '../../../assets/icons/toolTipIcon.svg';
import { ReactComponent as UploadIcon } from '../../../assets/icons/upload-cloud.svg';
import GenAIToolTip from '../../../shared/storybook/ToolTip/GenAIToolTip';

const Home = () => {
  const fileRef = useRef(null);

  return (
    <GenAIGrid className="home-ContentBody mainLayout">
      <GenAIGrid className="home-Section2">
        <GenAIGrid
          container
          item
          className="removeSpacingWrapper"
          spacing={4}
        ></GenAIGrid>

        <GenAIGrid
          container
          item
          className="removeSpacingWrapper"
          spacing={4}
        ></GenAIGrid>

        <GenAIGrid container className="removeSpacingWrapper" item spacing={4}>
          <GenAIGrid item xs={24} sm={23} md={12} className="optional-section">
            <GenAITypography>
              <p className="home_LabelName fontFamilyPoppins fontWeight-500">
                Confluence Analysis
              </p>

              <GenAIToolTip title="Analyse Pdfs and confluence links">
                <ToolTipIcon />
              </GenAIToolTip>
            </GenAITypography>

            <GenAIBox className="optional-boxWrapper">
              <GenAIBox gap={4} className="Add-Files-or-links-Box">
                <GenAIBox className="resourceTypeDropdownWrap">
                  <GenAIBox className="uploadText2">
                    Upload .pdf or .doc or .docx files
                  </GenAIBox>
                </GenAIBox>

                <GenAIBox
                  width="100%"
                  textAlign="center"
                  size="small"
                  sx={{
                    p: 0.5,
                    border: '1px dashed grey',
                  }}
                  className="fileDropBox"
                >
                  <input
                    ref={fileRef}
                    hidden
                    accept=".pdf, .docx, .doc"
                    type="file"
                  />
                  <GenAITypography>
                    <GenAITypography className="fontFamilyPoppins dragDrop fontWeight-400">
                      <GenAIButtonInvisible
                        component="label"
                        height="37"
                        border="0"
                      >
                        <UploadIcon /> Drag & Drop OR Browse File
                        <input
                          ref={fileRef}
                          hidden
                          accept=".pdf, .docx, .doc"
                          type="file"
                        />
                      </GenAIButtonInvisible>
                    </GenAITypography>
                  </GenAITypography>
                </GenAIBox>

                <span className="addFile">
                  <GenAIButtonOutlined component="label">
                    Add File{' '}
                  </GenAIButtonOutlined>
                </span>
              </GenAIBox>

              <GenAIBox gap={4} className="Add-Files-or-links-Box">
                <GenAIBox className="uploadText3">Add URL</GenAIBox>

                <GenAITextFieldMedium
                  placeholder="storyset.com/search?q=Add%20link"
                  className="addURLTextBox"
                  required
                  aria-label=""
                  aria-required="true"
                  name="url"
                />

                <span className="addFile">
                  <GenAIButtonOutlined>Add URL</GenAIButtonOutlined>
                </span>
              </GenAIBox>

              <GenAIBox className="addedContentBoxhome">
                <>
                  <GenAIGrid
                    container
                    item
                    alignItems="center"
                    className="dataItem"
                  >
                    <GenAIGrid
                      container
                      item
                      className="urlDataTextContainer"
                      xs={12}
                    >
                      <GenAITypography className="urlDataText ">
                        Empty
                      </GenAITypography>
                    </GenAIGrid>
                  </GenAIGrid>
                  <GenAIGrid
                    container
                    item
                    alignItems="center"
                    className="dataItem"
                  >
                    <GenAIGrid
                      container
                      item
                      className="urlDataTextContainer"
                      xs={12}
                    >
                      <GenAITypography className="urlDataText ">
                        Empty
                      </GenAITypography>
                    </GenAIGrid>
                  </GenAIGrid>
                  <GenAIGrid
                    container
                    item
                    alignItems="center"
                    className="dataItem"
                  >
                    <GenAIGrid
                      container
                      item
                      className="urlDataTextContainer"
                      xs={12}
                    >
                      <GenAITypography className="urlDataText ">
                        Empty
                      </GenAITypography>
                    </GenAIGrid>
                  </GenAIGrid>
                  <GenAIGrid
                    container
                    item
                    alignItems="center"
                    className="dataItem"
                  >
                    <GenAIGrid
                      container
                      item
                      className="urlDataTextContainer"
                      xs={12}
                    >
                      <GenAITypography className="urlDataText ">
                        Empty
                      </GenAITypography>
                    </GenAIGrid>
                  </GenAIGrid>
                </>
              </GenAIBox>
            </GenAIBox>
          </GenAIGrid>
        </GenAIGrid>

        <GenAIGrid container item className="removeSpacingWrapper1" spacing={4}>
          <GenAIGrid item xs={2} className="home_generate_btn">
            <GenAIButtonContained>Generate</GenAIButtonContained>
          </GenAIGrid>
        </GenAIGrid>
      </GenAIGrid>
    </GenAIGrid>
  );
};

export default Home;
