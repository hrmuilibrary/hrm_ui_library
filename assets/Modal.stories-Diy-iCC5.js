import{j as o}from"./jsx-runtime-CRV1wsqZ.js";import{r as b}from"./iframe-Dkwnu5r8.js";import{M,a as f}from"./Popover-BibChAQz.js";import{a as x}from"./IconArrowDownloadFilled-CQTeIssV.js";import{S as T}from"./index-CvFK_F5-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-AboGxAif.js";import"./index-Bhiaplye.js";import"./types-BvNpov2Y.js";import"./helpers-DfmQ1hOj.js";import"./IconDismiss-cPqzSfeh.js";import"./Tooltip-B9BpCeCB.js";import"./Text-D6ePIzKZ.js";import"./index-D07xtBE_.js";import"./Button-DcjAQVKK.js";import"./Link-Bg712_3L.js";import"./NestedMenu-2d1p3am4.js";import"./CollapseGroup-CPqtAp6m.js";import"./Divider-xcmY7NZH.js";import"./AnimatePresenceWrapper-G0JydHwA.js";import"./IconChevronDown-D-a5hNms.js";import"./IconChevronUp-BsDU70iR.js";import"./IconChevronRight-Kx34aMfH.js";import"./AvatarGroup-CL77isrQ.js";import"./DropzoneFileUpload-CEHPWusm.js";import"./Label-BD6PcrV7.js";import"./useFormProps-DtPetGM0.js";import"./ErrorMessage-DkDxS0XJ.js";import"./IconDynamicComponent-UwblBiXv.js";import"./Snackbar-BwpWnfj7.js";import"./Alert-CiD1DKkU.js";import"./IconDismissFilled-B8fo2nUN.js";import"./Progress-CWD1mumc.js";import"./IconAdd-G57nKHbA.js";import"./Checkbox-DPg14uX0.js";import"./IconInfo-D3j3K9nm.js";import"./IconCheckmark-CwV_g7cI.js";import"./Empty-zlFjFJQf.js";import"./Image-CNUvQOzt.js";import"./Input-CXKyYuw4.js";import"./IconCheckmarkCircleFilled-pGUFKaiz.js";import"./IconChevronLeft-BJF89irO.js";import"./IconCaretDownFilled-B3wxtv5V.js";import"./extends-CF3RwP-h.js";import"./Tab-BHDi5O30.js";import"./Badge-DsCuPDcm.js";import"./IconMore-w1d__Rlg.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_Modal {...args} titleSize="medium" onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Save',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel',
        type: 'secondary'
      }
    }}>
        <div>
          <Select options={OPTIONS} />
        </div>
      </_Modal>
    </div>;
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,u,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return <div>
      <p onClick={openModal}>click here </p>
      <_ModalConfirmation {...args} iconProps={{
      Component: IconDelete
    }} onClose={closeModal} isOpen={isOpen} onSubmit={() => {
      closeModal();
      console.log('submit');
    }} buttonProps={{
      confirm: {
        buttonText: 'Delete the card',
        buttonActionType: 'submit'
      },
      cancel: {
        buttonText: 'Cancel'
      }
    }} />
    </div>;
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const xo=["Modal","ModalConfirmation"];export{n as Modal,i as ModalConfirmation,xo as __namedExportsOrder,fo as default};
