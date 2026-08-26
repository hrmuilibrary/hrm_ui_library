import{j as e}from"./jsx-runtime-eZA7XPs2.js";import{r as i}from"./iframe-Bu6IG7x0.js";import{M as C,N as I}from"./NestedMenu-CmGMOTWF.js";import{B as b}from"./Button-0fHBq_V-.js";import{I as y}from"./IconArrowDownloadFilled-DPJ6bu2k.js";import{I as g,a as h,b as x}from"./IconBeach-xeWIS5TI.js";import{I as M}from"./IconMore-1gbw3TC7.js";import{I as O}from"./IconCheckmark-4NLZyMI_.js";import{I as n}from"./IconSettings-CWETMQ_D.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BcuKIR9W.js";import"./index-DyZCXPR1.js";import"./Text-BEaaacjR.js";import"./helpers-B70rEIFi.js";import"./index-AboGxAif.js";import"./types-DkRXjhPg.js";import"./index-CRfeIcbX.js";import"./useOnOutsideClick-Brbv3MrL.js";import"./CollapseGroup-CG9CdmLJ.js";import"./Divider-UN4ppvAa.js";import"./AnimatePresenceWrapper-D9lCI3Ho.js";import"./IconChevronDown-O65Ap1xa.js";import"./IconChevronUp-DNglmkGd.js";import"./IconChevronRight-yjYr_w3O.js";import"./AvatarGroup-DDEf4Hms.js";import"./DropzoneFileUpload-CrUcN01y.js";import"./Label-Tbk4f5TT.js";import"./useFormProps-D8N7lh7u.js";import"./ErrorMessage-Dr5Ip2Xf.js";import"./IconDynamicComponent-D25EWgep.js";import"./Snackbar-KfjVEEv3.js";import"./Alert-CnUTckAi.js";import"./IconDismissFilled-C3EQ65dE.js";import"./Progress-Bxr0d0gF.js";import"./IconAdd-BNCq2j9G.js";import"./Checkbox-DNjOMwZv.js";import"./Popover-BRffxo4f.js";import"./IconDismiss-BJxm4N4p.js";import"./Link-CHUmyIqN.js";import"./IconInfo-mOmcxJkQ.js";const ve={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Ce=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,Ce as __namedExportsOrder,ve as default};
