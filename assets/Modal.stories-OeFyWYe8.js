import{j as o}from"./jsx-runtime-Bbb5CGrR.js";import{r as b}from"./iframe-ngS_hadB.js";import{M,a as f}from"./Popover-cSV0FLRk.js";import{a as x}from"./IconArrowDownloadFilled-suUDXCEs.js";import{S as T}from"./index-CMm66Wf0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-Dqdq_jxa.js";import"./types-Bz-VumSl.js";import"./helpers-DtYswuEc.js";import"./IconDismiss-CV9yiX_Y.js";import"./Tooltip-DlFHHgNE.js";import"./Text-CRAPLiD3.js";import"./Button-QrgSjxTi.js";import"./Link-D_YVZnhC.js";import"./NestedMenu-oNWn_eJb.js";import"./index-BX6UAoJg.js";import"./CollapseGroup-DA9EjRsS.js";import"./Divider-CCbrXlUh.js";import"./AnimatePresenceWrapper-B_XdyFQI.js";import"./IconChevronDown-DVD5G2SD.js";import"./IconChevronUp-DHCvDI4A.js";import"./IconChevronRight-BKFYgC5q.js";import"./AvatarGroup-aIVXHhVn.js";import"./DropzoneFileUpload-1NM-j462.js";import"./Label-BKtYEcT4.js";import"./useFormProps-ChR1MLN1.js";import"./ErrorMessage-DqcoxZMK.js";import"./IconDynamicComponent-DbEHS7Oj.js";import"./Snackbar-CMOiZRyj.js";import"./Alert-B07b_zlz.js";import"./IconDismissFilled-BN9gBDB2.js";import"./Progress-B3svuPbV.js";import"./IconAdd-Kpyrq1V7.js";import"./Checkbox-BQ0wLWak.js";import"./IconInfo-DxSCVYBk.js";import"./IconCheckmark-TCFNvAy6.js";import"./Empty-B7H6vHOY.js";import"./Image-C44-lnmf.js";import"./Input-Bd1XttlR.js";import"./IconCheckmarkCircleFilled-BtdXTra0.js";import"./IconChevronLeft-Ds5EDStq.js";import"./IconCaretDownFilled-KPWy9B46.js";import"./extends-CF3RwP-h.js";import"./Tab-rS9iptin.js";import"./Badge-Bq1PIf-I.js";import"./IconMore-BdEr0v9b.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
