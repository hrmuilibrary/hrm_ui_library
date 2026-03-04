import{j as o}from"./jsx-runtime-CUEpH-cN.js";import{r as b}from"./iframe-B2n-sonQ.js";import{M,a as f}from"./Popover-C0wkIf_u.js";import{a as x}from"./IconArrowDownloadFilled-DvfmWR50.js";import{S as T}from"./index-BHcH1bw7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DYDl_GcV.js";import"./index-uvotEDf1.js";import"./types-DmqMf1oU.js";import"./helpers-DdXDXWzd.js";import"./IconDismiss-Cp7I9Va5.js";import"./Tooltip-Bbxxtat_.js";import"./Text-CO7aP-6T.js";import"./Button-D1JlRvo9.js";import"./Link-C_oqxTvj.js";import"./NestedMenu-CVF9crdv.js";import"./index-5DKENnEB.js";import"./CollapseGroup-DBt1Equd.js";import"./Divider-By2T9_jD.js";import"./AnimatePresenceWrapper-BKNeeFIU.js";import"./IconChevronDown-Skgbl1YX.js";import"./IconChevronUp-CwAe7ctP.js";import"./IconChevronRight-DURXy42u.js";import"./AvatarGroup-1YPzOgYf.js";import"./DropzoneFileUpload-_OQUe8xw.js";import"./Label-DuITUxwh.js";import"./useFormProps-DLl86Wi0.js";import"./ErrorMessage-BXGgzq4o.js";import"./IconDynamicComponent-CIxXHTc9.js";import"./Snackbar-B0zKic_U.js";import"./Alert-sGjrz9Ju.js";import"./IconDismissFilled-DdWK2zT3.js";import"./Progress-DLkD8uKX.js";import"./IconAdd-DkDM-AYE.js";import"./Checkbox-DK0FIsIJ.js";import"./IconInfo-IYVmM4Ss.js";import"./IconCheckmark-I3lfR7nd.js";import"./Empty-t7mMvmJY.js";import"./Image-lsevBUkq.js";import"./Input-BPTwG8tr.js";import"./IconCheckmarkCircleFilled-4HXwl0oy.js";import"./IconChevronLeft-mBUPDO4-.js";import"./IconCaretDownFilled-CWW96eOO.js";import"./extends-CF3RwP-h.js";import"./Tab-BEJ3fVHr.js";import"./Badge-uD1M0dIS.js";import"./IconMore-L1l7o9bq.js";const fo={title:"Modal",component:M,argTypes:{size:{options:["xlarge","large","medium","small"],control:{type:"radio"}}}},O=[{value:1,label:"Armenia",meta:"AM"},{value:2,label:"Italy",meta:"IT"}],C=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(M,{...s,titleSize:"medium",onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Save",buttonActionType:"submit"},cancel:{buttonText:"Cancel",type:"secondary"}},children:o.jsx("div",{children:o.jsx(T,{options:O})})})]})},n=C.bind({});n.args={size:"medium",title:"Title",subtitle:"Subtitle",closeIcon:!0,withFooter:!0,confirmBtnTooltipText:"Confirm"};const S=s=>{const[r,t]=b.useState(!1),e=()=>t(!1),l=()=>t(!0);return o.jsxs("div",{children:[o.jsx("p",{onClick:l,children:"click here "}),o.jsx(f,{...s,iconProps:{Component:x},onClose:e,isOpen:r,onSubmit:()=>{e(),console.log("submit")},buttonProps:{confirm:{buttonText:"Delete the card",buttonActionType:"submit"},cancel:{buttonText:"Cancel"}}})]})},i=S.bind({});i.args={size:"small",title:"Title text",subtitle:"This is your subtitle that will give you more context"};var a,p,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
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
