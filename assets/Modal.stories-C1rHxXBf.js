import{j as o}from"./jsx-runtime-96Wg0gMf.js";import{r as b}from"./iframe-Cvv3kum1.js";import{M,a as f}from"./Popover-CsfQpj4H.js";import{a as x}from"./IconArrowDownloadFilled-Z0ugP-e-.js";import{S as T}from"./index-DLJzpiEF.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-B-9VYrzV.js";import"./types-DN5MOBJf.js";import"./helpers-C6rmQpZ-.js";import"./IconDismiss-DM1fMKIB.js";import"./Tooltip-0c6HuLXZ.js";import"./Text-CG9W3FPS.js";import"./Button-C7IuxvuL.js";import"./Link-BlhJREZr.js";import"./NestedMenu-DB1Lbd1S.js";import"./index-CoHx_nq2.js";import"./CollapseGroup-D6CUGlUY.js";import"./Divider-BYiMQqMi.js";import"./AnimatePresenceWrapper-BLyp51PF.js";import"./IconChevronDown-Cxqmn-dP.js";import"./IconChevronUp-DvkidGuV.js";import"./IconChevronRight-B4cLZiAI.js";import"./AvatarGroup-CuvgsPPV.js";import"./DropzoneFileUpload-BN74Pn14.js";import"./Label-CGl5Z4W3.js";import"./useFormProps-CRl2e3TN.js";import"./ErrorMessage-9gH2KQG7.js";import"./IconDynamicComponent-nkQdiggN.js";import"./Snackbar-Ds5u-p-H.js";import"./Alert-VBq_US_8.js";import"./IconDismissFilled-CFRHRUZY.js";import"./Progress-Dyr0llIn.js";import"./IconAdd-PgUYQDlU.js";import"./Checkbox-D6wQDm-O.js";import"./IconInfo-DprYm42v.js";import"./IconCheckmark-Bymj29If.js";import"./Empty-BT8SGKbP.js";import"./Image-DKzjH-eo.js";import"./Input-DntDztzo.js";import"./IconCheckmarkCircleFilled-C0o6abvE.js";import"./IconChevronLeft-cuDlNhYc.js";import"./IconCaretDownFilled-D-Ofwj1h.js";import"./extends-CF3RwP-h.js";import"./Tab-CTGT14qM.js";import"./Badge-CCvP6gQH.js";import"./IconMore-DJWjNhs6.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
