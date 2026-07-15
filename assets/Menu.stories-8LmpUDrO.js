import{j as e}from"./jsx-runtime-DfZy_Tt8.js";import{r as i}from"./iframe-NHmQ9h-T.js";import{M as C,N as I}from"./NestedMenu-DB3novcl.js";import{B as b}from"./Button-CUJuh0d-.js";import{I as y}from"./IconArrowDownloadFilled-BLRE50so.js";import{I as g,a as h,b as x}from"./IconBeach-iGxmG3S4.js";import{I as M}from"./IconMore-B530ascU.js";import{I as O}from"./IconCheckmark-BsgsBWxv.js";import{I as n}from"./IconSettings-CaWZuzT9.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-Do0OpD0Y.js";import"./index-Cri0wNZf.js";import"./Text-09mmeRSS.js";import"./helpers-Com4CbOu.js";import"./index-AboGxAif.js";import"./types-Cg5ZwiOm.js";import"./index-fA273qB9.js";import"./Popover-BD_-wZsc.js";import"./IconDismiss-BgNk2rO4.js";import"./Link-BxnZ_4v3.js";import"./CollapseGroup-Debc1M3t.js";import"./Divider-D63fJm-R.js";import"./AnimatePresenceWrapper-DmfRoqPq.js";import"./IconChevronDown-BqfVWeLR.js";import"./IconChevronUp-BJ1AgBHg.js";import"./IconChevronRight-D0KgF9oy.js";import"./AvatarGroup-BHm3zGDx.js";import"./DropzoneFileUpload-al3ZsZmp.js";import"./Label-CBD2QhQt.js";import"./useFormProps-gtoW1Yqg.js";import"./ErrorMessage-57yNdNSd.js";import"./IconDynamicComponent-lk5nW0hk.js";import"./Snackbar-KwavAp9Y.js";import"./Alert-CwVGqmQ8.js";import"./IconDismissFilled-BUIKoiaN.js";import"./Progress-BHAP65zV.js";import"./IconAdd-CHTgNXel.js";import"./Checkbox-JqjbtDXw.js";import"./IconInfo-CAMwWbOi.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
