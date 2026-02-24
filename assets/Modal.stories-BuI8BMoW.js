import{j as o}from"./jsx-runtime-Dad0Pt4t.js";import{r as b}from"./iframe-CmGV6xoK.js";import{M,a as f}from"./Popover-BGNtKZ-u.js";import{a as x}from"./IconArrowDownloadFilled-C0lK5ilm.js";import{S as T}from"./index-BDPkhOe7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-CmL5Y0ic.js";import"./types-CFsqkMqD.js";import"./helpers-BuzDaASc.js";import"./IconDismiss-CAV4zZ-5.js";import"./Tooltip-B8X2zOYN.js";import"./Text-DP1ffZD3.js";import"./Button-DbBZD8p2.js";import"./Link-BEDsvzFi.js";import"./NestedMenu-BV3lU8o1.js";import"./index-D4bjqLnt.js";import"./CollapseGroup-9eLyq47j.js";import"./Divider-3LRuQ1JM.js";import"./AnimatePresenceWrapper-DM0Tp5aj.js";import"./IconChevronDown-G26SgSgE.js";import"./IconChevronUp-CTeh0Qct.js";import"./IconChevronRight-BRKHx9Gt.js";import"./AvatarGroup-A9JuLHU4.js";import"./DropzoneFileUpload-C4xc2Y5z.js";import"./Label-D6_6GgrR.js";import"./useFormProps-CcFeurmF.js";import"./ErrorMessage-BRMog3E2.js";import"./IconDynamicComponent-w65LUGiU.js";import"./Snackbar-PDFnAI7j.js";import"./Alert-DGOym6vj.js";import"./IconDismissFilled-Cvr4n4Mr.js";import"./Progress-CPdSZJzj.js";import"./IconAdd-DBWnU8eu.js";import"./Checkbox-BdHLKVT5.js";import"./IconInfo-CK6vxSv8.js";import"./IconCheckmark-CwsFZsyU.js";import"./Empty-Dr434Dij.js";import"./Image-DRbMXcs_.js";import"./Input-tWpmSUV7.js";import"./IconCheckmarkCircleFilled-_9kol15F.js";import"./IconChevronLeft-t7cKshIO.js";import"./IconCaretDownFilled-CvlG-AtZ.js";import"./extends-CF3RwP-h.js";import"./Tab-BQIGrYUG.js";import"./Badge-CY_CkEa9.js";import"./IconMore-BTMoJqQi.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
